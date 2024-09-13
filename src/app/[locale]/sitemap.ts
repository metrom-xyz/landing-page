import { BASE_URL } from "@/common";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: BASE_URL,
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
