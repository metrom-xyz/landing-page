"use client";

import { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { Typography } from "@metrom-xyz/ui";
import { APP_LINK, DOCUMENTATION_LINK, GITHUB_ISSUES_LINK } from "@/common";
import { Accordion } from "./ui/accordion";

const FAQS: { title: string; body: string | ReactNode }[] = [
    {
        title: "metrom.title",
        body: "metrom.text",
    },
    {
        title: "differences.title",
        body: <Differences />,
    },
    {
        title: "campaigns.title",
        body: <Campaigns />,
    },
    {
        title: "tokens.title",
        body: <Tokens />,
    },
    {
        title: "amms.title",
        body: <Amms />,
    },
];

export function Differences() {
    const t = useTranslations("faqs");

    return (
        <div className="flex flex-col gap-3">
            <Typography variant="lg" className="leading-normal">
                {t.rich("differences.text1", {
                    bold: (chunks) => <b>{chunks}</b>,
                })}
            </Typography>
            <Typography variant="lg" className="leading-normal">
                {t("differences.text2")}
            </Typography>
        </div>
    );
}

export function Campaigns() {
    const t = useTranslations("faqs");

    const steps = [
        "campaigns.text2",
        "campaigns.text3",
        "campaigns.text4",
    ] as const;

    return (
        <div className="flex flex-col gap-3">
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
            <Typography variant="lg" className="leading-normal">
                {t.rich("campaigns.text5", {
                    link: (chunks) => (
                        <a
                            href={`${DOCUMENTATION_LINK}/creating-a-campaign`}
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

export function Amms() {
    const t = useTranslations("faqs");

    return (
        <div className="flex flex-col gap-3">
            <Typography variant="lg" className="leading-normal">
                {t("amms.text1")}
            </Typography>
            <Typography variant="lg" className="leading-normal">
                {t("amms.text2")}
            </Typography>
        </div>
    );
}

export function Tokens() {
    const t = useTranslations("faqs");

    return (
        <div className="flex flex-col gap-3">
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
            <Typography variant="lg" className="leading-normal">
                {t("tokens.text2")}
            </Typography>
            <Typography variant="lg" className="leading-normal">
                {t("tokens.text3")}
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
