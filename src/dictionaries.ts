import "server-only";
import type { Locale } from "@/i18n-config";

import dictionary from "../dictionaries/en.json";

const dictionaries: Record<Locale, () => Promise<typeof dictionary>> = {
    en: () =>
        import("../dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
    dictionaries[locale]?.() ?? dictionaries.en();
