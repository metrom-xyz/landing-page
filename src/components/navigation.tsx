"use client";

import { ArrowRightIcon } from "@/app/assets/arrow-right";
import { Dictionary } from "@/types";
import { Typography } from "@metrom-xyz/ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface Link {
    name: string;
    link: string;
    route?: boolean;
}

interface NavigationProps {
    dicationary: Dictionary["navigation"];
    links: Link[];
    goBackTo?: string;
}

export function Navigation({ dicationary, links, goBackTo }: NavigationProps) {
    const { push } = useRouter();

    const handleOnGoBack = useCallback(() => {
        if (!goBackTo) return;
        push(goBackTo);
    }, [goBackTo, push]);

    return (
        <div className="w-fit flex justify-center gap-2 sm:gap-4 theme-surface p-4 rounded-xl">
            {goBackTo && (
                <div
                    className="flex items-center gap-3 p-1.5 rounded-md cursor-pointer theme-surface-hover transition-colors duration-200 ease-in-out"
                    onClick={handleOnGoBack}
                >
                    <ArrowRightIcon className="rotate-180" />
                    <Typography size="lg">{dicationary.back}</Typography>
                </div>
            )}
            {links.map(({ route, link, name }) =>
                route ? (
                    <Link
                        key={name}
                        href={link}
                        className="p-1.5 rounded-md theme-surface-hover transition-colors duration-200 ease-in-out"
                    >
                        <h3 className="text-base sm:text-lg leading-normal theme-text">
                            {name}
                        </h3>
                    </Link>
                ) : (
                    <a
                        key={name}
                        href={link}
                        className="p-1.5 rounded-md theme-surface-hover transition-colors duration-200 ease-in-out"
                    >
                        <h3 className="text-base sm:text-lg leading-normal theme-text">
                            {name}
                        </h3>
                    </a>
                ),
            )}
        </div>
    );
}
