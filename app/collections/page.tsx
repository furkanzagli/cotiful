import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs, PageIntro, JsonLd } from "@/components/site";
import { collections } from "@/lib/catalog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Wholesale Womenswear Collections for Europe & the Balkans", "Explore Cotiful seasonal wholesale womenswear edits for independent boutiques and fashion labels across Europe and the Balkans.", "/collections/");

export default function CollectionsPage() {
  return <div className="page-wrap"><Breadcrumbs items={[{ label: "Collections" }]} /><PageIntro eyebrow="Seasonal wholesale edits" title="An edit for every point of view." text="Explore Cotiful's collection direction across modern tailoring, coordinated separates and considered occasionwear. Ask us to confirm styles, fabrics and availability for your delivery market." /><JsonLd value={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Cotiful Womenswear Collections", description: "Seasonal wholesale womenswear collections from Türkiye." }} /><div className="collection-grid">{collections.map((collection) => <article className="collection-card" key={collection.slug}><div className="collection-photo"><Image src={collection.image} alt={`${collection.name} womenswear look`} fill sizes="(max-width: 700px) 90vw, 30vw" /></div><span>{collection.season}</span><h2>{collection.name}</h2><p>{collection.description}</p><Link className="text-link" href="/contact">Ask about this edit</Link></article>)}</div><div className="inline-cta"><h2>Planning a collection for your market?</h2><Link className="button button-dark" href="/contact">Share your brief</Link></div></div>;
}
