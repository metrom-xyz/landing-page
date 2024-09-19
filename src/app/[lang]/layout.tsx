import type { Metadata } from "next";
import { ReactNode } from "react";
import { BASE_URL } from "@/common";

import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@metrom-xyz/ui/style.css";
import "./globals.css";

export const metadata: Metadata = {
    title: "Maximize Liquidity Mining with Precision Incentives",
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
        "incentives",
        "incentivisation",
        "amm",
        "liquidity",
        "mining",
        "efficiency",
    ],
};

export async function generateStaticParams() {
    return [{ lang: "en-US" }];
}

export default async function RootLayout({
    children,
    params: { lang },
}: Readonly<{
    children: ReactNode;
    params: { lang: string };
}>) {
    return (
        <html lang={lang} className="bg-gray-100 p-4 md:p-12">
            <body>{children}</body>
        </html>
    );
}
