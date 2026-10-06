import { asset } from "./config";
export type Product = {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  code: string;
  fabric: string;
  description: string;
  colors: string[];
  sizes: string;
  image: string;
};

export const categories = [
  { slug: "trousers", name: "Trousers", note: "Tailored, relaxed and wide-leg silhouettes" },
  { slug: "blazers", name: "Blazers", note: "Modern structure for coordinated wardrobes" },
  { slug: "suits", name: "Suits & Sets", note: "Considered two-piece dressing" },
  { slug: "skirts", name: "Skirts", note: "Clean lines for day-to-evening collections" },
  { slug: "dresses", name: "Dresses", note: "Versatile shapes in seasonal fabrics" },
  { slug: "shirts", name: "Shirts & Blouses", note: "Layering pieces with thoughtful detail" },
];

export const products: Product[] = [
  { slug: "studio-wide-leg-trouser", name: "Studio wide-leg trouser", category: "Trousers", categorySlug: "trousers", code: "CTF-TR-104", fabric: "Poly-viscose blend · composition confirmed per order", description: "A fluid, clean-front wide-leg trouser designed for a considered everyday collection.", colors: ["Black", "Stone", "Espresso"], sizes: "EU 36–48, subject to style confirmation", image: asset("/images/cotiful-hero-espresso.webp") },
  { slug: "city-straight-trouser", name: "City straight trouser", category: "Trousers", categorySlug: "trousers", code: "CTF-TR-112", fabric: "Woven suiting · composition confirmed per order", description: "A straight silhouette with a pressed crease and a balanced, easy-to-style proportion.", colors: ["Black", "Charcoal", "Navy"], sizes: "EU 36–48, subject to style confirmation", image: asset("/images/cotiful-hero-pinstripe.webp") },
  { slug: "column-tailored-blazer", name: "Column tailored blazer", category: "Blazers", categorySlug: "blazers", code: "CTF-BL-206", fabric: "Tailoring fabric · composition confirmed per order", description: "A single-breasted blazer with a defined shoulder and a long, clean line.", colors: ["Black", "Espresso", "Oyster"], sizes: "EU 36–48, subject to style confirmation", image: asset("/images/cotiful-hero-black.webp") },
  { slug: "fine-stripe-suit", name: "Fine-stripe suit", category: "Suits & Sets", categorySlug: "suits", code: "CTF-ST-301", fabric: "Fine-stripe suiting · composition confirmed per order", description: "A coordinated blazer and trouser pairing for contemporary occasion and workwear edits.", colors: ["Charcoal stripe", "Navy stripe"], sizes: "EU 36–48, subject to style confirmation", image: asset("/images/cotiful-hero-pinstripe.webp") },
  { slug: "soft-line-midi-skirt", name: "Soft-line midi skirt", category: "Skirts", categorySlug: "skirts", code: "CTF-SK-405", fabric: "Seasonal woven · composition confirmed per order", description: "A pared-back midi shape developed to work with knitwear, shirts and tailored separates.", colors: ["Black", "Chocolate", "Stone"], sizes: "EU 36–48, subject to style confirmation", image: asset("/images/cotiful-hero-espresso.webp") },
  { slug: "drape-shirt-dress", name: "Drape shirt dress", category: "Dresses", categorySlug: "dresses", code: "CTF-DR-508", fabric: "Viscose blend · composition confirmed per order", description: "A relaxed shirt dress with a soft drape and a clean, versatile finish.", colors: ["Black", "Burgundy", "Olive"], sizes: "EU 36–48, subject to style confirmation", image: asset("/images/cotiful-hero-black.webp") },
  { slug: "relaxed-poplin-shirt", name: "Relaxed poplin shirt", category: "Shirts & Blouses", categorySlug: "shirts", code: "CTF-SH-602", fabric: "Cotton blend · composition confirmed per order", description: "A relaxed button-front shirt made to complement tailored and casual capsule assortments.", colors: ["White", "Sky", "Black"], sizes: "EU 36–48, subject to style confirmation", image: asset("/images/cotiful-hero-pinstripe.webp") },
];

export const posts = [
  { slug: "building-a-womens-tailoring-capsule", title: "Building a womenswear tailoring capsule for the new season", date: "2026-09-18", category: "Collection planning", excerpt: "A practical framework for balancing statement suits, repeatable trousers and easy layering pieces in a wholesale edit.", body: ["A useful tailoring capsule starts with repeatable foundations. A straight trouser, a fluid wide-leg shape and a versatile blazer give buyers several coordinated outfit stories without overloading the assortment.", "From there, use colour and fabric to create distinction. A core dark neutral can anchor the range, while one seasonal tone and a refined stripe add visual interest. Ask suppliers to confirm composition, colour availability and production timing against the exact style before finalising an order.", "For independent boutiques, the strongest capsule is one that can be merchandised as complete looks and sold as individual separates. Confirm size grading and minimum quantities by style early in the buying conversation."] },
  { slug: "sourcing-womenswear-from-turkey", title: "What to ask a womenswear manufacturer in Turkey", date: "2026-08-27", category: "Sourcing guide", excerpt: "The key production, sampling and delivery questions to settle before placing a private-label order.", body: ["A clear first brief helps both sides assess fit. Share target categories, reference silhouettes, expected size range, preferred fabrics, destination market and an indicative quantity by style.", "Ask how sampling is handled, when the size set can be reviewed, and which details are needed to confirm a production quote. Minimums, lead times and fabric availability can vary by style and should be confirmed in writing for each order.", "Before dispatch, agree the packing list, shipping terms, export documents and delivery address. A written approval trail for the sample and final specifications reduces avoidable changes later."] },
  { slug: "balkan-boutique-buying-checklist", title: "A buying checklist for Balkan fashion boutiques", date: "2026-07-30", category: "Balkan market", excerpt: "A straightforward checklist for comparing wholesale assortments, size runs and cross-border delivery details.", body: ["Boutique buyers often need collections that work across a compact shop floor and several customer occasions. Compare the range by complete outfits, fabric weight and repeatable core colours as well as by individual style.", "When assessing an exporter, confirm the delivery destination, agreed trade terms, estimated timing and documents required by your customs broker. Transit and customs requirements differ by country and shipment.", "Request a written offer that states the style references, colour and size quantities, price basis, payment schedule and quote validity. This makes supplier comparisons more reliable."] },
];

export const collections = [
  { slug: "autumn-winter-tailoring", name: "Autumn / Winter Tailoring", season: "Autumn / Winter", description: "Structured separates and coordinated suiting in a deeper seasonal palette.", image: asset("/images/cotiful-hero-pinstripe.webp") },
  { slug: "modern-wardrobe", name: "The Modern Wardrobe", season: "Core edit", description: "Considered trousers, blazers and easy layers for year-round assortments.", image: asset("/images/cotiful-hero-espresso.webp") },
  { slug: "occasion-in-motion", name: "Occasion in Motion", season: "Occasion", description: "Polished silhouettes developed for events, work and evening plans.", image: asset("/images/cotiful-hero-black.webp") },
];
