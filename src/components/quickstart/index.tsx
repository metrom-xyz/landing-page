"use client";

import { useTranslations } from "next-intl";
import { Step } from "./step";
import { Typography } from "@metrom-xyz/ui";

export function Quickstart() {
    const t = useTranslations("quickstart");

    return (
        <div className="w-full flex flex-col gap-10 px-4 py-7 md:p-10 bg-white rounded-4xl">
            <Typography
                variant="xl4"
                className="text-4xl font-semibold text-center"
            >
                {t("title")}
            </Typography>
            <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center">
                <Step
                    number={1}
                    title={t("step1.title")}
                    description={t("step1.description")}
                />
                <Step
                    number={2}
                    title={t("step2.title")}
                    description={t("step2.description")}
                />
                <Step
                    number={3}
                    title={t("step3.title")}
                    description={t("step3.description")}
                />
            </div>
        </div>
    );
}
