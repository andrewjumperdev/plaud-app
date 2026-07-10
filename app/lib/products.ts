export type ProductId = "plaud-note" | "plaud-note-pro" | "plaud-notepin";

export const PRODUCTS: Record<
  ProductId,
  { name: string; priceUsdCents: number; image: string }
> = {
  "plaud-note": {
    name: "Plaud Note",
    priceUsdCents: 15900,
    image: "/store/product-note.png",
  },
  "plaud-note-pro": {
    name: "Plaud Note Pro",
    priceUsdCents: 18900,
    image: "/store/product-notepro.png",
  },
  "plaud-notepin": {
    name: "Plaud NotePin",
    priceUsdCents: 15900,
    image: "/store/product-notepin.png",
  },
};
