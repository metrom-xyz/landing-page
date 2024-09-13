"use client";

import { Metrom } from "@/app/assets/logos/metrom";
import { Discord } from "@/app/assets/socials/discord";
import { Github } from "@/app/assets/socials/github";
import { Telegram } from "@/app/assets/socials/telegram";
import { X } from "@/app/assets/socials/x";
import { Typography } from "@metrom-xyz/ui";
import { useTranslations } from "next-intl";

const SOCIALS = [
    { icon: Github, link: "https://github.com/metrom-xyz" },
    { icon: X, link: "https://x.com/metromxyz" },
    { icon: Discord, link: "https://t.co/CxuKegMffl" },
    { icon: Telegram, link: "https://t.me/metrom_xyz" },
];

const LINKS = [
    {
        text: "links.support",
        link: "https://t.co/CxuKegMffl",
    },
    {
        text: "links.documentation",
        link: "https://docs.metrom.xyz",
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
                    {SOCIALS.map(({ icon: Icon, link }, index) => (
                        <a
                            key={index}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon />
                        </a>
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    <Metrom className="max-w-60" />
                    <Typography variant="sm" light>
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
                            variant="lg"
                            weight="medium"
                            light={index > 0}
                        >
                            {t(link.text)}
                        </Typography>
                    </a>
                ))}
            </div>
        </footer>
    );
}
