export const i18n = {
    defaultLocale: "en",
    locales: ["en"],
};

export type Locale = (typeof i18n)["locales"][number];