"use client";

import { Metrom } from "@/app/assets/logos/metrom";
import { Discord } from "@/app/assets/socials/discord";
import { Github } from "@/app/assets/socials/github";
import { Telegram } from "@/app/assets/socials/telegram";
import { X } from "@/app/assets/socials/x";
import {
    DISCORD_LINK,
    DOCUMENTATION_LINK,
    GITHUB_LINK,
    TELEGRAM_LINK,
    X_ACCOUNT_LINK,
} from "@/common";
import { Dictionary } from "@/types";
import { Typography } from "@metrom-xyz/ui";
import { ThemeSwitch } from "./theme-switch";
import Link from "next/link";

interface FooterProps {
    dictionary: Dictionary["footer"];
}

export function Footer({ dictionary }: FooterProps) {
    const SOCIALS = [
        {
            text: dictionary.socials.github,
            icon: Github,
            link: GITHUB_LINK,
        },
        { text: dictionary.socials.x, icon: X, link: X_ACCOUNT_LINK },
        { text: dictionary.socials.discord, icon: Discord, link: DISCORD_LINK },
        {
            text: dictionary.socials.telegram,
            icon: Telegram,
            link: TELEGRAM_LINK,
        },
    ];

    const LINKS = [
        {
            text: dictionary.links.jobs,
            internal: true,
            link: "/jobs",
        },
        {
            text: dictionary.links.support,
            link: DISCORD_LINK,
        },
        {
            text: dictionary.links.documentation,
            link: DOCUMENTATION_LINK,
        },
        {
            text: dictionary.links.contact,
            link: "mailto:hello@metrom.xyz",
        },
    ];

    return (
        <footer className="w-full flex flex-col items-center md:items-end gap-10 md:gap-0 md:flex-row md:justify-between md:mt-16 p-8 rounded-xl max-w-screen-xl theme-surface">
            <div className="md:min-h-[188px] flex flex-col gap-6 justify-between">
                <div className="h-full flex justify-between -mx-2.5">
                    {SOCIALS.map(({ icon: Icon, link, text }, index) => (
                        <a
                            key={index}
                            href={link}
                            aria-label={text}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full theme-surface-hover transition-colors duration-200 ease-in-out"
                        >
                            <Icon className="theme-text h-6 w-6" />
                        </a>
                    ))}
                </div>
                <Metrom className="max-w-52 text-black dark:text-white" />
            </div>
            <div className="h-full flex flex-col gap-0.5 text-center md:text-left">
                {LINKS.map(({ link, text, internal }, index) =>
                    internal ? (
                        <Link
                            key={index}
                            href={link}
                            className="p-1.5 rounded-md theme-surface-hover transition-colors duration-200 ease-in-out"
                        >
                            <Typography weight="medium">{text}</Typography>
                        </Link>
                    ) : (
                        <a
                            key={index}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-md theme-surface-hover transition-colors duration-200 ease-in-out"
                        >
                            <Typography weight="medium">{text}</Typography>
                        </a>
                    ),
                )}
                <div className="mt-4">
                    <ThemeSwitch />
                </div>
            </div>
        </footer>
    );
}
