import Link from "next/link";
import { Breadcrumbs, PageIntro } from "@/components/site";
import { posts } from "@/lib/catalog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Womenswear Wholesale Journal | Europe & Balkan Sourcing", "Guides for womenswear boutiques and fashion labels: wholesale collection planning, sourcing from Türkiye and buying for European and Balkan markets.", "/blog/");

export default function BlogPage() {
  return <div className="page-wrap"><Breadcrumbs items={[{ label: "Journal" }]} /><PageIntro eyebrow="Cotiful journal" title="Notes for the people who buy well." text="Practical thinking on womenswear collection planning, wholesale sourcing and preparing a considered range for your customers." /><div className="article-grid">{posts.map((post) => <article className="article-card" key={post.slug}><span className="eyebrow">{post.category}</span><time dateTime={post.date}>{new Date(`${post.date}T12:00:00Z`).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}</time><h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.excerpt}</p><Link className="text-link" href={`/blog/${post.slug}`}>Read article</Link></article>)}</div></div>;
}
