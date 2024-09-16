import { BASE_URL } from "@/common";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const locales = ["en"];

    const urls: MetadataRoute.Sitemap = [];

    locales.forEach((locale) => {
        urls.push({
            url: `${BASE_URL}/${locale}`,
            changeFrequency: "monthly",
            priority: 1,
        });
    });

    return urls;
}
