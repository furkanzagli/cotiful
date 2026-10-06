import Link from "next/link";
import { Breadcrumbs, PageIntro, JsonLd } from "@/components/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Wholesale Womenswear FAQ | MOQ, Delivery & Sourcing", "Answers about Cotiful wholesale and private-label womenswear orders, sampling, order minimums, delivery, customs and trade enquiries.", "/faq/");
const questions = [
  ["Who can enquire about a wholesale order?", "We work with boutiques, retailers and fashion labels looking for womenswear wholesale or a private-label conversation. Share your company, delivery market and categories of interest so we can review fit."],
  ["What is the minimum order quantity?", "Minimum quantities depend on the style, fabric, colour and production plan. We confirm the applicable minimum for each selected style in the written quotation."],
  ["Can you develop private-label styles?", "Private-label and OEM/ODM requirements can be discussed against a clear reference, specification, target quantity and timing. Feasibility is confirmed style by style."],
  ["Can I request samples before placing an order?", "Sampling requirements, availability, charges and timing are agreed for the specific style and development brief. Include your sample needs in the enquiry."],
  ["Which countries do you deliver to?", "Cotiful focuses on trade enquiries from Europe and the Balkans. Destination, shipping terms, transit expectations and export documents are confirmed before an order is placed."],
  ["Who handles customs and import charges?", "This depends on the agreed shipping terms and delivery country. Buyers should confirm local import requirements and charges with their customs broker before confirming an order."],
  ["How do I receive prices and lead times?", "Send the style references, colour and size quantities, target destination and timing. Our team can confirm price basis and production timing in a written quotation for that brief."],
];

export default function FaqPage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: questions.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  return <div className="page-wrap"><Breadcrumbs items={[{ label: "Wholesale FAQ" }]} /><PageIntro eyebrow="Trade information" title="Clear answers before you buy." text="Find the basics on wholesale enquiries, private label, samples and cross-border delivery. Style-specific terms are confirmed directly in the quotation." /><JsonLd value={faqSchema} /><div className="faq-list">{questions.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div><div className="inline-cta"><h2>Need an answer for a specific style?</h2><Link className="button button-dark" href="/contact">Ask the trade team</Link></div></div>;
}
