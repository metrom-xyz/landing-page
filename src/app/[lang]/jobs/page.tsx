import { i18n } from "@/i18n-config";
import { getDictionary } from "../../../dictionaries";
import { Jobs } from "@/components/jobs";
import { Navigation } from "@/components/navigation";

export default async function JobsPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return (
        <div className="w-full flex items-center flex-col gap-20 md:gap-[4.75rem]">
            <Navigation links={[]} logo />
            <div className="flex md:flex-1 flex-col items-center gap-[4.75rem] w-full max-w-screen-lg">
                <Jobs dictionary={dictionary.jobs} />
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}
