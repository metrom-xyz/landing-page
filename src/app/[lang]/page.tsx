import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Ecosystem } from "@/components/ecosystem";
import { Articles } from "@/components/articles";
import { Faqs } from "@/components/faqs";
import { getDictionary } from "../../dictionaries";
import { i18n } from "@/i18n-config";
import { Navigation } from "@/components/navigation";

const HEADER_LINKS = [
    {
        name: "Features",
        link: "#features",
    },
    {
        name: "Ecosystem",
        link: "#ecosystem",
    },
    {
        name: "Articles",
        link: "#articles",
    },
    {
        name: "FAQs",
        link: "#faqs",
    },
];

export default async function Home({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return (
        <div className="w-full flex items-center flex-col gap-20 md:gap-[4.75rem]">
            <Navigation links={HEADER_LINKS} />
            <Hero dictionary={dictionary.home.hero} />
            <div className="flex md:flex-1 flex-col items-center gap-[4.75rem] w-full max-w-screen-xl">
                <Features dictionary={dictionary.home.features} />
                <Ecosystem dictionary={dictionary.home.ecosystem} />
                <Articles dictionary={dictionary.home.articles} />
                <Faqs dictionary={dictionary.home.faqs} />
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}
