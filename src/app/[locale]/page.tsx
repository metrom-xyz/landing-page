import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Partners } from "@/components/partners";
import { Articles } from "@/components/articles";
import { Quickstart } from "@/components/quickstart";
import { Faqs } from "@/components/faqs";
import { Footer } from "@/components/foooter";

export default function Home() {
    return (
        <div className="flex justify-center min-h-screen">
            <div className="w-full flex items-center flex-col gap-20 md:gap-32">
                <Hero />
                <div className="flex md:flex-1 flex-col items-center gap-[4.75rem] w-full max-w-screen-xl">
                    <Features />
                    <Partners />
                    <Quickstart />
                    <Faqs />
                    <Articles />
                </div>
                <Footer />
            </div>
        </div>
    );
}
