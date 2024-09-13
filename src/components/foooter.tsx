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
import { Typography } from "@metrom-xyz/ui";
import { useTranslations } from "next-intl";

const SOCIALS = [
    {
        text: "socials.github",
        icon: Github,
        link: GITHUB_LINK,
    },
    { text: "socials.x", icon: X, link: X_ACCOUNT_LINK },
    { text: "socials.discord", icon: Discord, link: DISCORD_LINK },
    {
        text: "socials.telegram",
        icon: Telegram,
        link: TELEGRAM_LINK,
    },
];

const LINKS = [
    {
        text: "links.support",
        link: DISCORD_LINK,
    },
    {
        text: "links.documentation",
        link: DOCUMENTATION_LINK,
    },
    {
        text: "links.contact",
        link: "mailto:hello@metrom.xyz",
    },
];

export function Footer() {
    const t = useTranslations("footer");

    return (
        <footer className="w-full flex justify-between mt-16 max-w-screen-2xl">
            <div className="flex flex-col gap-20">
                <div className="flex items-center gap-11">
                    {SOCIALS.map(({ icon: Icon, link, text }, index) => (
                        <a
                            key={index}
                            href={link}
                            aria-label={t(text)}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon />
                        </a>
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    <Metrom className="max-w-60" />
                    <Typography variant="sm" className="text-gray-600">
                        {t("byCarrot", { year: new Date().getFullYear() })}
                    </Typography>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                {LINKS.map((link, index) => (
                    <a
                        key={index}
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Typography
                            weight="medium"
                            className={`${index > 0 && "text-gray-600"}`}
                        >
                            {t(link.text)}
                        </Typography>
                    </a>
                ))}
            </div>
        </footer>
    );
}
