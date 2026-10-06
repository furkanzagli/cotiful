"use client";
import { useMemo, useState } from "react";
import { ProductGrid } from "@/components/site";
import type { Product } from "@/lib/catalog";

export function CategoryBrowser({ items }: { items: Product[] }) {
  const [color, setColor] = useState("All colours");
  const colours = ["All colours", ...Array.from(new Set(items.flatMap((item) => item.colors)))];
  const visible = useMemo(() => color === "All colours" ? items : items.filter((item) => item.colors.includes(color)), [items, color]);
  return <><div className="category-tools"><div className="filter-chips" aria-label="Filter by available colour">{colours.map((item) => <button key={item} type="button" aria-pressed={color === item} onClick={() => setColor(item)}>{item}</button>)}</div><span className="result-count">{visible.length} {visible.length === 1 ? "style" : "styles"}</span></div><ProductGrid items={visible} /></>;
}
