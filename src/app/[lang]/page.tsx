import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Partners } from "@/components/partners";
import { Articles } from "@/components/articles";
import { Faqs } from "@/components/faqs";
import { Footer } from "@/components/foooter";
import { getDictionary } from "../../dictionaries";

export default async function Home({
    params: { lang },
}: {
    params: { lang: string };
}) {
    const dictionary = await getDictionary(lang);

    return (
        <div className="flex justify-center min-h-screen">
            <div className="w-full flex items-center flex-col gap-20 md:gap-32">
                <Hero dictionary={dictionary.hero} />
                <div className="flex md:flex-1 flex-col items-center gap-[4.75rem] w-full max-w-screen-xl">
                    <Features dictionary={dictionary.features} />
                    <Partners dictionary={dictionary.partners} />
                    <Faqs dictionary={dictionary.faqs} />
                    <Articles dictionary={dictionary.articles} />
                </div>
                <Footer dictionary={dictionary.footer} />
            </div>
        </div>
    );
}
