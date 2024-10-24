import type { Metadata } from "next";
import { ReactNode } from "react";
import { BASE_URL } from "@/common";
import { i18n } from "@/i18n-config";

import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@metrom-xyz/ui/style.css";
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
    return (
        <html lang={lang} className="bg-gray-100 px-4 py-6 md:px-12 md:py-16">
            <body>{children}</body>
        </html>
    );
}
