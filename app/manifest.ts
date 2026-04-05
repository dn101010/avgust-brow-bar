import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Август — Студия бровей и ресниц",
    short_name: "Август",
    description: "Студия бровей и ресниц в Хамовниках",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF7F2",
    theme_color: "#2A2420",
  };
}
