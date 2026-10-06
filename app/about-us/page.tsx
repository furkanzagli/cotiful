import { asset } from "@/lib/config";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs, PageIntro } from "@/components/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("About Cotiful | Turkish Womenswear Manufacturer & Exporter", "Meet Cotiful, an Istanbul-based womenswear wholesale and manufacturing partner for independent labels and boutiques in Europe and the Balkans.", "/about-us/");

export default function AboutPage() {
  return <div className="page-wrap"><Breadcrumbs items={[{ label: "About us" }]} /><PageIntro eyebrow="About Cotiful" title="A thoughtful partner for the way you want to dress." text="Cotiful brings together womenswear design, wholesale and production conversations from Istanbul, Türkiye. We work with boutiques and independent labels building a distinctive collection for their customers." /><div className="two-col-copy"><h2>Good work, made together.</h2><div><p>Every label has a different customer, rhythm and point of view. Our role is to understand the brief, explore suitable styles and agree clear specifications before an order moves forward.</p><p>We focus on contemporary womenswear: trousers, blazers, coordinated sets, skirts, dresses and shirts. A first conversation covers the silhouettes, fabric direction, size range, colours, destination and order plan that make sense for your business.</p><p>Production capacity, sampling, minimum quantities and delivery timing are confirmed against the exact order brief. That keeps expectations clear from the first reference to the final shipment.</p></div></div><div className="editorial-image"><Image src={asset("/images/cotiful-hero-espresso.webp")} alt="Cotiful womenswear tailoring campaign in warm stone tones" fill sizes="90vw" /></div><p className="editorial-cap">Cotiful studio direction · wholesale womenswear from Türkiye</p><div className="inline-cta"><h2>Tell us what you are building.</h2><Link className="button button-dark" href="/contact">Start a conversation</Link></div></div>;
}
