import type { NextConfig } from "next";
const basePath = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://amlmediagroups.com").pathname.replace(/\/$/, "");
const nextConfig: NextConfig = { output: "export", trailingSlash: true, basePath, images: { unoptimized: true }, poweredByHeader: false };
export default nextConfig;
