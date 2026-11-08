import type { MetadataRoute } from "next";
import { brands, site } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { return ["/", ...brands.map(b => `/brands/${b.slug}/`), "/privacy/"].map(path => ({ url: `${site.url}${path}` })); }
