import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Avgust Brow Bar",
    short_name: "Avgust",
    description: "Натуральные брови и ресницы в Хамовниках",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF8",
    theme_color: "#2C3E50",
  };
}
