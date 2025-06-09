import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Ecosystem } from "@/components/ecosystem";
import { Articles } from "@/components/articles";
import { Faqs } from "@/components/faqs";
import { getDictionary } from "../../dictionaries";

export default async function Home({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return (
        <div className="w-full flex items-center flex-col gap-20 md:gap-[4.75rem]">
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
