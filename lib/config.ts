export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/cotiful";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://furkanzagli.github.io/cotiful").replace(/\/$/, "");
export const asset = (path: string) => `${basePath}${path}`;
export const absoluteUrl = (path: string) => `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
