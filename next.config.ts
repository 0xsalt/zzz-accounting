import type { NextConfig } from "next";

const isGhPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGhPages ? "/zzz-accounting" : "",
  allowedDevOrigins: ["the-commons.taila8bee6.ts.net"],
};

export default nextConfig;
