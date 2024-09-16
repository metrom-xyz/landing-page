"use client";

import { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { Typography } from "@metrom-xyz/ui";
import { APP_LINK, GITHUB_ISSUES_LINK } from "@/common";
import { Accordion } from "./ui/accordion";

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
        title: "campaigns.title",
        body: <Campaigns />,
    },
    {
        title: "providers.title",
        body: <Providers />,
    },
    {
        title: "tokens.title",
        body: <Tokens />,
    },
];

export function Campaigns() {
    const t = useTranslations("faqs");

    const steps = [
        "campaigns.text2",
        "campaigns.text3",
        "campaigns.text4",
        "campaigns.text5",
    ] as const;

    return (
        <div>
            <Typography variant="lg" className="leading-normal">
                {t.rich("campaigns.text1", {
                    link: (chunks) => (
                        <a
                            href={APP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="leading-normal text-brand-blue font-medium"
                        >
                            {chunks}
                        </a>
                    ),
                })}
            </Typography>
            <ol className="list-decimal ml-5">
                {steps.map((step, index) => (
                    <li key={index}>
                        <Typography variant="lg" className="leading-normal">
                            {t(step)}
                        </Typography>
                    </li>
                ))}
            </ol>
        </div>
    );
}

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

export function Tokens() {
    const t = useTranslations("faqs");

    return (
        <div className="flex flex-col md:flex-row gap-1">
            <Typography variant="lg" className="leading-normal">
                {t.rich("tokens.text1", {
                    link: (chunks) => (
                        <a
                            href={GITHUB_ISSUES_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="leading-normal text-brand-blue font-medium"
                        >
                            {chunks}
                        </a>
                    ),
                })}
            </Typography>
        </div>
    );
}

export function Faqs() {
    const t = useTranslations("faqs");

    return (
        <div className="w-full flex flex-col gap-1 md:px-28">
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
