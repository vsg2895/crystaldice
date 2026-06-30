import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The casino/offer images are served by the Laravel storage backend. In
    // local dev that is http://localhost:8000 — a private IP, which Next 16
    // refuses to optimize by default (SSRF protection). Opt in for dev/private
    // networks. In production these are served from a public domain/CDN.
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      // Allow logos/banners from the storage backend or a CDN.
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },
};

export default nextConfig;
