"use client";

import { Metrom } from "@/app/assets/logos/metrom";
import { APP_LINK, DOCUMENTATION_LINK } from "@/common";
import { Button, Typography } from "@metrom-xyz/ui";
import { useTranslations } from "next-intl";

export function Hero() {
    const t = useTranslations("hero");

    return (
        <section className="flex flex-col gap-9 items-center text-center justify-center w-full max-w-screen-2xl py-28 rounded-4xl bg-white">
            <Metrom className="mb-9" />
            <Typography className="text-6xl font-semibold max-w-[800px]">
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
                        root: "min-w-44 bg-brand-green hover:bg-green-300 text-black",
                    }}
                >
                    {t("launch")}
                </Button>
                <Button
                    href={DOCUMENTATION_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={{ root: "min-w-44" }}
                >
                    {t("more")}
                </Button>
            </div>
        </section>
    );
}
