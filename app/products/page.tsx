import Link from "next/link";
import { Breadcrumbs, PageIntro, ProductGrid } from "@/components/site";
import { categories, products } from "@/lib/catalog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Wholesale Women's Clothing & B2B Catalogue", "Browse Cotiful's wholesale womenswear styles, including trousers, blazers, suits, skirts, dresses and shirts. Request a trade quote for your market.", "/products/");

export default function ProductsPage() {
  return <div className="page-wrap"><Breadcrumbs items={[{ label: "Products" }]} /><PageIntro eyebrow="The Cotiful line sheet" title="Styles to build a collection around." text="Browse selected womenswear references across our core categories. Fabric, colour, size run, order minimum and lead time are confirmed against the exact style and brief." /><nav className="filter-chips" style={{ marginBottom: 30 }} aria-label="Product categories">{categories.map((item) => <Link key={item.slug} className="button" style={{ minHeight: 42, borderColor: "var(--line)", padding: "0 14px" }} href={`/category/${item.slug}`}>{item.name}</Link>)}</nav><ProductGrid items={products} /></div>;
}
