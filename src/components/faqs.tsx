"use client";

import { useTranslations } from "next-intl";
import { Accordion } from "./ui/accordion";
import { Typography } from "@metrom-xyz/ui";
import { ReactNode } from "react";

const FAQS: { title: string; body: string | ReactNode }[] = [
    {
        title: "metrom.title",
        body: "metrom.text",
    },
    {
        title: "incentives.title",
        body: "incentives.text",
    },
    {
        title: "providers.title",
        body: <Providers />,
    },
];

export function Providers() {
    const t = useTranslations("faqs");

    return (
        <div>
            <Typography variant="lg" className="leading-normal">
                {t("providers.text1")}
            </Typography>
            <ol className="list-decimal ml-5">
                <li>
                    <Typography variant="lg" className="leading-normal">
                        {t("providers.text2")}
                    </Typography>
                </li>
                <li>
                    <Typography variant="lg" className="leading-normal">
                        {t("providers.text3")}
                    </Typography>
                </li>
            </ol>
        </div>
    );
}

export function Faqs() {
    const t = useTranslations("faqs");

    return (
        <div className="w-full flex flex-col gap-1 max-w-[800px]">
            {FAQS.map(({ title, body }, index) => (
                <Accordion key={index} title={t(title)}>
                    {typeof body === "string" ? (
                        <Typography variant="lg" className="leading-normal">
                            {t(body)}
                        </Typography>
                    ) : (
                        body
                    )}
                </Accordion>
            ))}
        </div>
    );
}
