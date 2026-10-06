import { asset, siteUrl } from "@/lib/config";
import Link from "next/link";
import Image from "next/image";
import { HeroSlider } from "@/components/hero-slider";
import { JsonLd, ProductGrid, SectionHeading } from "@/components/site";
import { categories, collections, products } from "@/lib/catalog";
import { pageMetadata, siteDescription } from "@/lib/seo";

export const metadata = pageMetadata("Wholesale Womenswear Manufacturer in Türkiye", "Explore wholesale women's trousers, blazers and coordinated sets from Cotiful, a womenswear manufacturer and exporter in Türkiye for European and Balkan boutiques.");

export default function Home() {
  return <>
    <JsonLd value={{ "@context": "https://schema.org", "@type": "WebSite", name: "Cotiful", url: siteUrl, description: siteDescription }} />
    <HeroSlider />
    <section className="intro-strip"><div><span className="eyebrow">A point of view, in every detail</span><h2>Tailoring for the <i>everyday extraordinary.</i></h2></div><div className="intro-copy"><p>Cotiful develops womenswear for boutiques and independent fashion labels looking for a thoughtful wholesale partner in Türkiye. Explore modern tailoring, coordinated sets and collection pieces, then tell us what your market needs.</p><Link className="text-link" href="/about-us">Get to know Cotiful</Link></div></section>
    <nav className="category-ribbon" aria-label="Shop by category">{categories.map((category) => <Link key={category.slug} href={`/category/${category.slug}`}>{category.name}<span>{category.note.split(" ").slice(0,4).join(" ")}</span></Link>)}</nav>
    <section className="section"><SectionHeading eyebrow="Selected styles · 2026" title={<>The tailoring <i>edit.</i></>} href="/products" /><ProductGrid items={products.slice(0,3)} /></section>
    <section className="split-feature"><div className="split-photo"><Image src={asset("/images/cotiful-hero-pinstripe.webp")} alt="European-inspired pinstripe tailoring from Cotiful" fill sizes="50vw" /></div><div className="split-copy"><span className="eyebrow">Designed for trade</span><h2>Built around your collection.</h2><p>From first reference to final specification, each wholesale conversation starts with your assortment, target market and delivery plan. Share a brief and the team can confirm which styles and options are available for your order.</p><Link className="text-link" href="/manufacturer">How we work</Link></div></section>
    <section className="benefits" aria-label="Cotiful wholesale approach"><div className="benefit"><b>Made in Türkiye</b><p>Work directly with an Istanbul-based womenswear maker and exporter.</p></div><div className="benefit"><b>For independent trade</b><p>Wholesale and private-label conversations shaped around your brand and market.</p></div><div className="benefit"><b>Clear from the first brief</b><p>Confirm fabric, colours, sizes, minimums and timing for each selected style.</p></div></section>
    <section className="section"><SectionHeading eyebrow="Seasonal direction" title={<>Three ways to <i>wear it.</i></>} href="/collections" linkText="Explore collections" /><div className="collection-grid">{collections.map((collection) => <Link className="collection-card" href="/collections" key={collection.slug}><div className="collection-photo"><Image src={collection.image} alt={`${collection.name} wholesale womenswear edit`} fill sizes="(max-width: 700px) 90vw, 30vw" /></div><span>{collection.season}</span><h2>{collection.name}</h2><p>{collection.description}</p></Link>)}</div></section>
    <section className="manifesto"><span className="eyebrow">Cotiful · Istanbul</span><h2>Good clothes begin with a good conversation.</h2><p>Tell us where you sell, what you are looking to make and what matters most to your customers. We will take it from there.</p><Link className="button button-light" href="/contact">Start a trade enquiry</Link></section>
  </>;
}
