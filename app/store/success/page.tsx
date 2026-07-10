import Stripe from "stripe";

const WHATSAPP_BASE = "https://wa.me/5493512673489";

export const metadata = {
  title: "Compra confirmada — Plaud Argentina",
};

async function getSession(sessionId: string | undefined) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!sessionId || !secretKey) return null;
  try {
    const stripe = new Stripe(secretKey);
    return await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items"],
    });
  } catch {
    return null;
  }
}

export default async function StoreSuccess({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  const session = await getSession(searchParams.session_id);
  const productName = session?.line_items?.data?.[0]?.description;
  const email = session?.customer_details?.email;

  return (
    <div className="plaud-v2">
      <div className="section" style={{ padding: "120px 0", textAlign: "center", maxWidth: 560 }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
        <h1 className="section-title">¡Compra confirmada!</h1>
        <p className="section-sub">
          {productName ? (
            <>
              Tu <strong>{productName}</strong> está en camino.{" "}
            </>
          ) : null}
          {email ? `Te enviamos la confirmación a ${email}. ` : ""}
          En breve te contactamos por WhatsApp para coordinar el envío y tu onboarding
          personalizado.
        </p>
        <a
          href={`${WHATSAPP_BASE}?text=Hola%20Silvana%2C%20acabo%20de%20comprar%20un%20Plaud%20y%20quiero%20coordinar%20el%20env%C3%ADo`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ display: "inline-block", marginTop: 24 }}
        >
          Coordinar envío por WhatsApp →
        </a>
        <div style={{ marginTop: 20 }}>
          <a href="/store">Volver a la tienda</a>
        </div>
      </div>
    </div>
  );
}
