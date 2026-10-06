"use client";
import { FormEvent, useState } from "react";

export function RfqForm() {
  const [ready, setReady] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [
      `Style reference: ${new URLSearchParams(window.location.search).get("style") || "General enquiry"}`,
      `Name: ${form.get("name")}`, `Company: ${form.get("company")}`, `Email: ${form.get("email")}`,
      `Market: ${form.get("market")}`, `Interested in: ${form.get("interest")}`, `Estimated quantity: ${form.get("quantity")}`,
      `Message: ${form.get("message")}`,
    ].join("\n");
    const link = document.createElement("a");
    link.href = `data:text/plain;charset=utf-8,${encodeURIComponent(`COTIFUL WHOLESALE ENQUIRY\n\n${body}`)}`;
    link.download = "cotiful-wholesale-enquiry.txt";
    link.click(); setReady(true);
  }
  return <form className="rfq-form" onSubmit={submit}>
    <div className="form-grid"><label>Your name<input name="name" required autoComplete="name" placeholder="Name and surname" /></label><label>Company<input name="company" required autoComplete="organization" placeholder="Brand, boutique or company" /></label><label>Business email<input type="email" name="email" required autoComplete="email" placeholder="name@company.com" /></label><label>Delivery market<select name="market" defaultValue=""><option value="" disabled>Select a market</option><option>European Union</option><option>Western Balkans</option><option>United Kingdom</option><option>Other</option></select></label><label>Styles of interest<select name="interest" defaultValue=""><option value="" disabled>Select categories</option><option>Trousers</option><option>Blazers</option><option>Suits and sets</option><option>Skirts and dresses</option><option>Mixed collection</option></select></label><label>Estimated quantity<input name="quantity" placeholder="Per style, if known" /></label><label className="form-wide">Tell us about your brief<textarea name="message" rows={4} placeholder="Styles, fabric preferences, target timing or questions" /></label></div>
    <div className="form-submit"><button className="button button-dark" type="submit">Prepare enquiry</button><p>Submitting downloads a ready-to-send enquiry note. No message is sent automatically.</p></div>
    {ready && <p className="form-success" role="status">Your enquiry note is ready. Send it to your Cotiful contact to continue the conversation.</p>}
  </form>;
}
