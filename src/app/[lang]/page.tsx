import { getDictionary } from "../../dictionaries";
import { i18n } from "@/i18n-config";
import { Home } from "@/components/home";

export default async function HomePage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return <Home dictionary={dictionary} />;
}

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}
