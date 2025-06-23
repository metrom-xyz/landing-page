import { i18n } from "@/i18n-config";
import { getDictionary } from "../../../dictionaries";
import { Jobs } from "@/components/jobs";

export default async function JobsPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return <Jobs dictionary={dictionary} />;
}

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}
