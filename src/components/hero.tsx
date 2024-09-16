"use client";

import { Metrom } from "@/app/assets/logos/metrom";
import { APP_LINK, DOCUMENTATION_LINK } from "@/common";
import { Button, Typography } from "@metrom-xyz/ui";
import { useTranslations } from "next-intl";

export function Hero() {
    const t = useTranslations("hero");

    return (
        <section className="w-full flex flex-col gap-9 items-center text-center justify-center max-w-screen-2xl py-28 px-4 rounded-4xl bg-white">
            <Metrom className="mb-9" />
            <Typography className="text-[2.5rem] md:text-6xl leading-normal font-semibold max-w-5xl">
                {t("title")}
            </Typography>
            <Typography
                variant="xl2"
                weight="medium"
                className="max-w-[600px] text-gray-600"
            >
                {t("description")}
            </Typography>
            <div className="flex gap-3">
                <Button
                    href={APP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={{
                        root: "md:min-w-44 bg-brand-green hover:bg-green-300 text-black",
                    }}
                >
                    {t("launch")}
                </Button>
                <Button
                    href={DOCUMENTATION_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={{ root: "md:min-w-44" }}
                >
                    {t("more")}
                </Button>
            </div>
        </section>
    );
}
