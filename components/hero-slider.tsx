"use client";
import Image from "next/image";
import { asset } from "@/lib/config";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  { image: asset("/images/cotiful-hero-espresso.webp"), alt: "Espresso tailored suit in a sunlit Istanbul interior", eyebrow: "Autumn / Winter 26", title: <>Form, <i>with feeling.</i></>, text: "A considered edit of modern tailoring for boutiques and independent labels.", cta: "Explore the collection", href: "/collections" },
  { image: asset("/images/cotiful-hero-pinstripe.webp"), alt: "Pinstripe womenswear tailoring in a European stone arcade", eyebrow: "The tailoring edit", title: <>Made to <i>move.</i></>, text: "Coordinated separates shaped around the way women dress now.", cta: "Discover the styles", href: "/category/suits" },
  { image: asset("/images/cotiful-hero-black.webp"), alt: "Black tailored blazer from the Cotiful womenswear collection", eyebrow: "Made in Türkiye", title: <>A better kind of <i>uniform.</i></>, text: "Wholesale womenswear with room for your point of view.", cta: "Talk to our team", href: "/contact" },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);
  useEffect(() => { if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 6500); return () => window.clearInterval(timer); }, []);
  const slide = slides[active];
  return <section className={`hero-slider ${active === 1 ? "hero-align-right" : ""}`} aria-roledescription="carousel" aria-label="Cotiful collections">
    {slides.map((item, i) => <Image key={item.image} className={`hero-image ${i === active ? "is-active" : ""}`} src={item.image} alt={item.alt} fill priority={i === 0} sizes="100vw" />)}
    <div className="hero-shade"></div><div className="hero-content" key={active}><span className="eyebrow light-eyebrow">{slide.eyebrow} <span className="hero-divider"></span> Cotiful Studio</span><h1>{slide.title}</h1><p>{slide.text}</p><Link className="button button-light" href={slide.href}>{slide.cta}</Link></div>
    <div className="hero-controls"><div className="hero-count"><span>0{active + 1}</span><i></i><span>0{slides.length}</span></div><div className="hero-dots">{slides.map((item, i) => <button key={item.image} onClick={() => setActive(i)} aria-label={`Show slide ${i + 1}`} aria-current={active === i ? "true" : undefined}><span style={{ transform: `scaleX(${active === i ? 1 : 0})` }} /></button>)}</div><div className="hero-arrows"><button onClick={() => setActive((active + slides.length - 1) % slides.length)} aria-label="Previous slide">Previous</button><button onClick={() => setActive((active + 1) % slides.length)} aria-label="Next slide">Next</button></div></div>
    <span className="hero-side-label">WHOLESALE WOMENSWEAR · EUROPE & THE BALKANS</span>
  </section>;
}
