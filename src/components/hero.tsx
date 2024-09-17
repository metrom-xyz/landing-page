"use client";

import { Metrom } from "@/app/assets/logos/metrom";
import { APP_LINK, DOCUMENTATION_LINK } from "@/common";
import { Button, Typography } from "@metrom-xyz/ui";
import { useTranslations } from "next-intl";

export function Hero() {
    const t = useTranslations("hero");

    return (
        <section className="w-full flex flex-col gap-9 items-center text-center justify-center max-w-screen-2xl pt-28 pb-4 md:py-28 px-4 rounded-4xl bg-white">
            <Metrom className="mb-9" />
            <Typography
                variant="xl5"
                className="text-[2.5rem] md:text-6xl leading-none font-bold max-w-5xl"
            >
                {t("title")}
            </Typography>
            <h2 className="text-xl2 leading-8 max-w-[600px] font-medium font-sans text-gray-600">
                {t("description")}
            </h2>
            <div className="flex w-full md:w-fit gap-3">
                <Button
                    href={APP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={{
                        root: "w-full md:min-w-44 bg-brand-green hover:bg-green-300 text-black",
                    }}
                >
                    {t("launch")}
                </Button>
                <Button
                    href={DOCUMENTATION_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={{ root: "w-full md:min-w-44" }}
                >
                    {t("more")}
                </Button>
            </div>
        </section>
    );
}
