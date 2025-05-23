"use client";

import { Metrom } from "@/app/assets/logos/metrom";
import { APP_LINK, UNISWAP_CASE_STUDY_LINK } from "@/common";
import type { Dictionary } from "@/types";
import { Button, Typography } from "@metrom-xyz/ui";

interface HeroProps {
    dictionary: Dictionary["hero"];
}

export function Hero({ dictionary }: HeroProps) {
    return (
        <section className="w-full flex flex-col gap-9 items-center text-center justify-center max-w-screen-2xl pt-28 pb-4 md:py-28 px-4 rounded-4xl theme-surface">
            <Metrom className="mb-9 text-black dark:text-white" />
            <Typography
                size="xl5"
                className="text-[2.5rem]! md:text-6xl! leading-none! font-bold! max-w-5xl whitespace-pre-line"
            >
                {dictionary.title}
            </Typography>
            <h2 className="text-xl2 leading-8 max-w-[600px] font-medium font-sans text-gray-600 dark:text-gray-400">
                {dictionary.description}
            </h2>
            <div className="flex flex-col md:flex-row items-center w-full md:w-fit justify-center gap-3">
                <Button
                    href={APP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={{
                        root: "bg-brand-green! hover:bg-green-300! text-black! !min-w-52",
                    }}
                >
                    {dictionary.launch}
                </Button>
                <Button
                    href={UNISWAP_CASE_STUDY_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={{
                        root: "!min-w-52",
                    }}
                >
                    {dictionary.more}
                </Button>
            </div>
        </section>
    );
}
