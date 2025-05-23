import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Ecosystem } from "@/components/ecosystem";
import { Articles } from "@/components/articles";
import { Faqs } from "@/components/faqs";
import { Footer } from "@/components/footer";
import { getDictionary } from "../../dictionaries";

export default async function Home({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return (
        <div className="flex justify-center min-h-screen">
            <div className="w-full flex items-center flex-col gap-20 md:gap-[4.75rem]">
                <Hero dictionary={dictionary.hero} />
                <div className="flex md:flex-1 flex-col items-center gap-[4.75rem] w-full max-w-screen-xl">
                    <Features dictionary={dictionary.features} />
                    <Ecosystem dictionary={dictionary.ecosystem} />
                    <Articles dictionary={dictionary.articles} />
                    <Faqs dictionary={dictionary.faqs} />
                </div>
                <Footer dictionary={dictionary.footer} />
            </div>
        </div>
    );
}
