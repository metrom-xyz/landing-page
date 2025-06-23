import { Dictionary } from "@/types";
import { Navigation } from "../navigation";
import { Articles } from "./articles";
import { Ecosystem } from "./ecosystem";
import { Faqs } from "./faqs";
import { Features } from "./features";
import { Hero } from "./hero";

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
    {
        name: "Jobs",
        link: "/jobs",
        route: true,
    },
];

interface HomeProps {
    dictionary: Dictionary;
}

export function Home({ dictionary: { navigation, home } }: HomeProps) {
    return (
        <div className="w-full flex items-center flex-col gap-16">
            <Navigation dicationary={navigation} links={HEADER_LINKS} />
            <Hero dictionary={home.hero} />
            <div className="flex md:flex-1 flex-col items-center gap-16 w-full max-w-screen-xl">
                <Features dictionary={home.features} />
                <Ecosystem dictionary={home.ecosystem} />
                <Articles dictionary={home.articles} />
                <Faqs dictionary={home.faqs} />
            </div>
        </div>
    );
}
