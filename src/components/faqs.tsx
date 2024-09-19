"use client";

import { ReactNode } from "react";
import { Typography } from "@metrom-xyz/ui";
import { DOCUMENTATION_LINK, GITHUB_ISSUES_LINK } from "@/common";
import { Accordion } from "./ui/accordion";
import { Dictionary } from "@/types";
import { interpolate } from "@/utils";

interface FaqsProps {
    dictionary: Dictionary["faqs"];
}

export function Differences({ dictionary }: FaqsProps) {
    return (
        <div className="flex flex-col gap-3">
            <Typography variant="lg" className="leading-normal">
                {interpolate(dictionary.differences.text1, {
                    boldText: <b>{dictionary.differences.text1Bold}</b>,
                })}
            </Typography>
            <Typography variant="lg" className="leading-normal">
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
            <Typography variant="lg" className="leading-normal">
                {dictionary.campaigns.text1}
            </Typography>
            <ol className="list-decimal ml-5">
                {steps.map((step, index) => (
                    <li key={index}>
                        <Typography variant="lg" className="leading-normal">
                            {step}
                        </Typography>
                    </li>
                ))}
            </ol>
            <Typography variant="lg" className="leading-normal">
                {interpolate(dictionary.campaigns.text5, {
                    linkText: (
                        <a
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
            <Typography variant="lg" className="leading-normal">
                {interpolate(dictionary.tokens.text1, {
                    linkText: (
                        <a
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
            <Typography variant="lg" className="leading-normal">
                {dictionary.tokens.text2}
            </Typography>
            <Typography variant="lg" className="leading-normal">
                {dictionary.tokens.text3}
            </Typography>
        </div>
    );
}

export function Amms({ dictionary }: FaqsProps) {
    return (
        <div className="flex flex-col gap-3">
            <Typography variant="lg" className="leading-normal">
                {dictionary.amms.text1}
            </Typography>
            <Typography variant="lg" className="leading-normal">
                {dictionary.amms.text2}
            </Typography>
        </div>
    );
}

interface FaqsProps {
    dictionary: Dictionary["faqs"];
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
            title: dictionary.amms.title,
            body: <Amms dictionary={dictionary} />,
        },
    ];

    return (
        <div className="w-full flex flex-col gap-1 md:px-28">
            {FAQS.map(({ title, body }, index) => (
                <Accordion key={index} title={title}>
                    {typeof body === "string" ? (
                        <Typography variant="lg" className="leading-normal">
                            {body}
                        </Typography>
                    ) : (
                        body
                    )}
                </Accordion>
            ))}
        </div>
    );
}
