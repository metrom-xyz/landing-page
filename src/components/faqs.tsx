"use client";

import { ReactNode } from "react";
import { Accordion, Typography } from "@metrom-xyz/ui";
import { DOCUMENTATION_LINK, GITHUB_ISSUES_LINK } from "@/common";
import { Dictionary } from "@/types";
import { interpolate } from "@/utils";

interface FaqsProps {
    dictionary: Dictionary["home"]["faqs"];
}

export function Differences({ dictionary }: FaqsProps) {
    return (
        <div className="flex flex-col gap-3">
            <Typography size="lg" className="leading-normal">
                {interpolate(dictionary.differences.text1, {
                    boldText: (
                        <b key="differences">
                            {dictionary.differences.text1Bold}
                        </b>
                    ),
                })}
            </Typography>
            <Typography size="lg" className="leading-normal">
                {dictionary.differences.text2}
            </Typography>
        </div>
    );
}

export function Campaigns({ dictionary }: FaqsProps) {
    const steps = [
        dictionary.campaigns.text2,
        dictionary.campaigns.text3,
        dictionary.campaigns.text4,
    ] as const;

    return (
        <div className="flex flex-col gap-3">
            <Typography size="lg" className="leading-normal">
                {dictionary.campaigns.text1}
            </Typography>
            <ol className="list-decimal ml-5">
                {steps.map((step, index) => (
                    <li key={index}>
                        <Typography size="lg" className="leading-normal">
                            {step}
                        </Typography>
                    </li>
                ))}
            </ol>
            <Typography size="lg" className="leading-normal">
                {interpolate(dictionary.campaigns.text5, {
                    linkText: (
                        <a
                            key="campaigns"
                            href={`${DOCUMENTATION_LINK}/creating-a-campaign`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="leading-normal text-brand-blue font-medium"
                        >
                            {dictionary.campaigns.text5Link}
                        </a>
                    ),
                })}
            </Typography>
        </div>
    );
}

export function Tokens({ dictionary }: FaqsProps) {
    return (
        <div className="flex flex-col gap-3">
            <Typography size="lg" className="leading-normal">
                {interpolate(dictionary.tokens.text1, {
                    linkText: (
                        <a
                            key="tokens"
                            href={GITHUB_ISSUES_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="leading-normal text-brand-blue font-medium"
                        >
                            {dictionary.tokens.text1Link}
                        </a>
                    ),
                })}
            </Typography>
            <Typography size="lg" className="leading-normal">
                {dictionary.tokens.text2}
            </Typography>
            <Typography size="lg" className="leading-normal">
                {dictionary.tokens.text3}
            </Typography>
        </div>
    );
}

export function Amms({ dictionary }: FaqsProps) {
    return (
        <div className="flex flex-col gap-3">
            <Typography size="lg" className="leading-normal">
                {dictionary.dexes.text1}
            </Typography>
            <Typography size="lg" className="leading-normal">
                {dictionary.dexes.text2}
            </Typography>
        </div>
    );
}

interface FaqsProps {
    dictionary: Dictionary["home"]["faqs"];
}

export function Faqs({ dictionary }: FaqsProps) {
    const FAQS: { title: string; body: string | ReactNode }[] = [
        {
            title: dictionary.metrom.title,
            body: dictionary.metrom.text,
        },
        {
            title: dictionary.differences.title,
            body: <Differences dictionary={dictionary} />,
        },
        {
            title: dictionary.campaigns.title,
            body: <Campaigns dictionary={dictionary} />,
        },
        {
            title: dictionary.tokens.title,
            body: <Tokens dictionary={dictionary} />,
        },
        {
            title: dictionary.dexes.title,
            body: <Amms dictionary={dictionary} />,
        },
    ];

    return (
        <div className="w-full flex flex-col gap-1 md:px-28">
            <div className="text-center mb-8 text-[30px] font-bold theme-text">
                FAQs
            </div>
            {FAQS.map(({ title, body }, index) => (
                <Accordion
                    key={index}
                    title={
                        <Typography size="xl" weight="medium" className="p-2">
                            {title}
                        </Typography>
                    }
                >
                    <div className="p-6">
                        {typeof body === "string" ? (
                            <Typography size="lg" className="leading-normal">
                                {body}
                            </Typography>
                        ) : (
                            body
                        )}
                    </div>
                </Accordion>
            ))}
        </div>
    );
}
