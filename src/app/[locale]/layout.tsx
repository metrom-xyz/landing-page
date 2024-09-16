import type { Metadata } from "next";
import { ReactNode } from "react";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { BASE_URL } from "@/common";

import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@metrom-xyz/ui/style.css";
import "./globals.css";

export const metadata: Metadata = {
    title: "Metrom",
    description:
        "Maximize Your Liquidity Mining Impact with Precision Incentives",
    alternates: {
        canonical: BASE_URL,
        languages: {
            "en-US": `${BASE_URL}/en`,
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

export default async function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: ReactNode;
    params: { locale: string };
}>) {
    const messages = await getMessages();

    return (
        <html lang={locale} className="bg-gray-100 p-4 md:p-12">
            <body>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
