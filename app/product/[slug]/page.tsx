import { siteUrl } from "@/lib/config";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumbs, JsonLd } from "@/components/site";
import { products } from "@/lib/catalog";

export const dynamicParams = false;
export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const product = products.find((item) => item.slug === slug);
  if (!product) return { title: "Style not found" };
  const title = `${product.name} | Wholesale ${product.category}`;
  const description = `${product.description} Request trade availability, colours, fabric details and order minimums from Cotiful.`;
  return { title, description, alternates: { canonical: `${siteUrl}/product/${slug}/` }, openGraph: { title: `${title} | Cotiful`, description, type: "website", siteName: "Cotiful", images: [{ url: new URL(product.image, siteUrl).href, alt: `${product.name} by Cotiful` }] }, twitter: { card: "summary_large_image", title, description } };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Product", name: product.name, sku: product.code, category: product.category, description: product.description, image: new URL(product.image, siteUrl).href, brand: { "@type": "Brand", name: "Cotiful" }, material: product.fabric };
  return <div className="page-wrap"><Breadcrumbs items={[{ label: product.category, href: `/category/${product.categorySlug}` }, { label: product.name }]} /><JsonLd value={schema} /><div className="product-detail"><div className="product-detail-photo"><Image src={product.image} alt={`${product.name} wholesale womenswear by Cotiful`} fill priority sizes="(max-width: 700px) 90vw, 52vw" /></div><div className="product-detail-copy"><span className="eyebrow">{product.category} · Wholesale style</span><h1>{product.name}</h1><p>{product.description}</p><span className="style-code">STYLE REFERENCE · {product.code}</span><div className="detail-block"><strong>Fabric</strong><span>{product.fabric}</span></div><div className="detail-block"><strong>Available colours</strong><div className="swatch-list">{product.colors.map((color) => <span className="swatch" key={color}>{color}</span>)}</div></div><div className="detail-block"><strong>Size range</strong><span>{product.sizes}</span></div><div className="detail-block"><strong>MOQ & trade terms</strong><span>Quoted by style, fabric and order brief</span></div><Link className="button button-dark" href={`/contact?style=${encodeURIComponent(product.code)}`}>Request a trade quote</Link><p className="data-note" style={{ marginTop: 24 }}>Style images are campaign references. Confirm final product details, colour standards, composition, sizes, minimum quantities, production timing and price in a written quotation before ordering.</p></div></div></div>;
}
