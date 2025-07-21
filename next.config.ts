import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "imageio.forbes.com",
      "cdn.cnn.com",
      "ichef.bbci.co.uk",
      "media.cnn.com",
      "static01.nyt.com",
      "media.npr.org",
      "assets.bwbx.io",
      "m.media-amazon.com",
      "www.reuters.com",
      "i.guim.co.uk",
      "img.youtube.com",
      "cdn.pixabay.com",
      "i0.wp.com", // <-- add more as you find them
    ],
  },
};

export default nextConfig;
