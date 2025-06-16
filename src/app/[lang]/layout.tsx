import type { Metadata } from "next";
import { ReactNode } from "react";
import { BASE_URL } from "@/common";
import { i18n } from "@/i18n-config";
import Fathom from "@/components/fathom";
import { ThemeProvider } from "next-themes";
import { Footer } from "@/components/footer";
import { getDictionary } from "@/dictionaries";
import { CirclesIllustration } from "../assets/circles-illustration";
import { LinesIllustration } from "../assets/lines-illustration";

import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
    title: "Maximize your liquidity mining impact with precise incentives",
    description:
        "Metrom is a flexible liquidity mining platform designed to help AMMs and projects efficiently launch and manage multiple incentivisation campaigns.",
    alternates: {
        canonical: `${BASE_URL}/en`,
        languages: {
            en: `${BASE_URL}/en`,
        },
    },
    keywords: [
        "metrom",
        "precise",
        "incentives",
        "incentivisation",
        "amm",
        "liquidity",
        "mining",
        "efficiency",
    ],
};

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: ReactNode;
    params: Promise<{ lang: string }>;
}>) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return (
        <html
            lang={lang}
            suppressHydrationWarning
            className="theme-bg scroll-smooth scroll-pt-10"
        >
            <body>
                <ThemeProvider attribute="data-theme">
                    <Fathom />
                    <div className="flex min-h-screen flex-col gap-[4.75rem] justify-between items-center px-4 py-6 md:px-12 md:py-15">
                        {/* TODO: use backround images once we implement the new landing page design */}
                        <CirclesIllustration className="absolute max-w-screen-5xl w-full h-full -z-10 -top-28" />
                        <LinesIllustration className="absolute max-w-screen-5xl w-full h-full -z-10 -top-1/3 sm:-top-28" />
                        <div className="w-full">{children}</div>
                        <Footer dictionary={dictionary.footer} />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
