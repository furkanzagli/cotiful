import { absoluteUrl } from "@/lib/config";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/catalog";

const navItems = [
  ["Collections", "/collections"], ["Trousers", "/category/trousers"], ["Blazers", "/category/blazers"],
  ["Suits & sets", "/category/suits"], ["Manufacturing", "/manufacturer"], ["Journal", "/blog"],
] as const;

export function Header() {
  return <header className="site-header"><div className="header-inner">
    <Link className="wordmark" href="/" aria-label="Cotiful home">COTIFUL<span className="wordmark-dot">.</span><small>ISTANBUL · WOMENSWEAR</small></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{navItems.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav>
    <Link className="header-cta" href="/contact">Wholesale enquiry</Link>
    <details className="mobile-nav"><summary aria-label="Open menu"><i></i><i></i></summary><nav>{navItems.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}<Link href="/about-us">About us</Link><Link href="/contact">Contact</Link></nav></details>
  </div></header>;
}

export function Footer() {
  return <footer className="site-footer"><div className="footer-main">
    <div><Link className="wordmark footer-wordmark" href="/">COTIFUL<span className="wordmark-dot">.</span><small>ISTANBUL · WOMENSWEAR</small></Link><p>Wholesale womenswear, made for independent labels and boutiques.</p></div>
    <div className="footer-col"><span className="eyebrow">Explore</span><Link href="/products">Products</Link><Link href="/collections">Collections</Link><Link href="/manufacturer">Manufacturing</Link><Link href="/blog">Journal</Link></div>
    <div className="footer-col"><span className="eyebrow">Cotiful</span><Link href="/about-us">About us</Link><Link href="/faq">Wholesale FAQ</Link><Link href="/contact">Contact</Link></div>
    <div className="footer-note"><span className="eyebrow">For trade enquiries</span><p>Share the styles, quantities and delivery market you have in mind. We will prepare the next steps around your brief.</p><Link className="text-link" href="/contact">Start an enquiry</Link></div>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} Cotiful</span><span>Istanbul, Türkiye · Serving Europe & the Balkans</span><Link href="/sitemap.xml">Sitemap</Link></div></footer>;
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  const list = [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, ...items.map((item, i) => ({ "@type": "ListItem", position: i + 2, name: item.label, ...(item.href ? { item: absoluteUrl(item.href) } : {}) }))];
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: list }) }} /><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link>{items.map((item, i) => <span key={item.label}><b>/</b>{item.href && i < items.length - 1 ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</span>)}</nav></>;
}

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-intro"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></section>;
}

export function ProductCard({ product }: { product: typeof products[number] }) {
  return <Link className="product-card" href={`/product/${product.slug}`}>
    <div className="product-image"><Image src={product.image} alt={`${product.name} womenswear by Cotiful`} fill sizes="(max-width: 700px) 90vw, 30vw" /><span className="product-open">View style</span></div>
    <div className="product-meta"><span>{product.category}</span><span>{product.code}</span></div><h3>{product.name}</h3><p>Wholesale · Request details</p>
  </Link>;
}

export function ProductGrid({ items = products }: { items?: typeof products }) {
  return <div className="product-grid">{items.map((product) => <ProductCard key={product.slug} product={product} />)}</div>;
}

export function SectionHeading({ eyebrow, title, href, linkText = "View all styles" }: { eyebrow: string; title: ReactNode; href?: string; linkText?: string }) {
  return <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>{href && <Link className="text-link" href={href}>{linkText}</Link>}</div>;
}

export function JsonLd({ value }: { value: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(value).replace(/</g, "\\u003c") }} />;
}
