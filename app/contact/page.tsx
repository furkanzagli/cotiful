import { Breadcrumbs, PageIntro } from "@/components/site";
import { RfqForm } from "@/components/rfq-form";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Contact Cotiful | Wholesale Womenswear RFQ", "Send Cotiful a wholesale womenswear or private-label enquiry. Share your company, style references, target quantities and delivery market.", "/contact/");

export default function ContactPage() {
  return <div className="page-wrap"><Breadcrumbs items={[{ label: "Contact" }]} /><PageIntro eyebrow="Trade enquiries" title="Let's talk about your next collection." text="Share what you are sourcing, where you sell and what you have in mind. Style availability, minimum quantities and terms can then be reviewed against your brief." /><div className="form-layout"><aside className="form-aside"><h2>A good starting point is a clear brief.</h2><p>Tell us your business name, the categories you are interested in and your delivery market. If you already have style references, colour ideas, quantity targets or a tech pack, include those too.</p><div className="data-note"><b>What happens next</b><br />This form prepares an enquiry note on your device. No data is sent to Cotiful or stored by this website. Contact details and a direct WhatsApp line can be added once confirmed.</div></aside><RfqForm /></div></div>;
}
