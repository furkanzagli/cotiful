import { siteUrl } from "@/lib/config";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumbs, JsonLd } from "@/components/site";
import { posts } from "@/lib/catalog";

export const dynamicParams = false;
export function generateStaticParams() { return posts.map((post) => ({ slug: post.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const post = posts.find((item) => item.slug === slug);
  if (!post) return { title: "Article not found" };
  return { title: post.title, description: post.excerpt, alternates: { canonical: `${siteUrl}/blog/${slug}/` }, openGraph: { title: `${post.title} | Cotiful Journal`, description: post.excerpt, type: "article", siteName: "Cotiful", publishedTime: new Date(post.date).toISOString() }, twitter: { card: "summary_large_image", title: post.title, description: post.excerpt } };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  return <article className="page-wrap"><Breadcrumbs items={[{ label: "Journal", href: "/blog" }, { label: post.category, href: "/blog" }, { label: post.title }]} /><header className="page-intro"><span className="eyebrow">{post.category} · Cotiful journal</span><h1>{post.title}</h1><p>{post.excerpt}</p><time dateTime={post.date} style={{ display: "block", marginTop: 20, color: "#80776e", fontSize: 11 }}>{new Date(`${post.date}T12:00:00Z`).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}</time></header><JsonLd value={{ "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.excerpt, datePublished: post.date, dateModified: post.date, author: { "@type": "Organization", name: "Cotiful" }, publisher: { "@type": "Organization", name: "Cotiful" }, mainEntityOfPage: `${siteUrl}/blog/${post.slug}` }} /><div className="article-body">{post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<Link className="text-link" href="/contact">Discuss your collection brief</Link></div></article>;
}
