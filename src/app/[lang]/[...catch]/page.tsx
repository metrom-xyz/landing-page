import { i18n, Locale } from "@/i18n-config";
import { notFound } from "next/navigation";

interface Params {
    locale: Locale;
}

interface NotFoundCatchAllProps {
    params: Promise<Params>;
}

export default async function NotFoundCatchAll({
    params,
}: NotFoundCatchAllProps) {
    const { locale } = await params;

    if (!i18n.locales.includes(locale)) notFound();

    notFound();
}

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}
