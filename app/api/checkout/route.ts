import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { PRODUCTS, ProductId } from "../../lib/products";

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    console.error("STRIPE_SECRET_KEY is not set");
    return NextResponse.json({ error: "Pagos no configurados" }, { status: 500 });
  }

  const stripe = new Stripe(secretKey);

  try {
    const { productId } = (await req.json()) as { productId?: string };
    const product = productId ? PRODUCTS[productId as ProductId] : undefined;

    if (!product) {
      return NextResponse.json({ error: "Producto inválido" }, { status: 400 });
    }

    const origin = req.nextUrl.origin;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              images: [`${origin}${product.image}`],
            },
            unit_amount: product.priceUsdCents,
          },
          quantity: 1,
        },
      ],
      shipping_address_collection: { allowed_countries: ["AR"] },
      success_url: `${origin}/store/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/store?checkout=cancelado`,
    });

    if (!session.url) {
      return NextResponse.json({ error: "No se pudo iniciar el pago" }, { status: 500 });
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: "No se pudo iniciar el pago" }, { status: 500 });
  }
}
