import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const locales = ["en"];

    const rules = locales.map((locale) => ({
        userAgent: "*",
        allow: `/${locale}/`,
    }));

    return {
        rules,
    };
}
