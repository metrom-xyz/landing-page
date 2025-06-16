import { MetromCompact } from "@/app/assets/logos/metrom-compact";
import Link from "next/link";

interface Link {
    name: string;
    link: string;
}

interface NavigationProps {
    links: Link[];
    logo?: boolean;
}

export function Navigation({ links, logo }: NavigationProps) {
    return (
        <div className="w-full flex justify-center gap-2 sm:gap-4 -mb-14 sm:-mb-5">
            {logo && (
                <Link href="/">
                    <MetromCompact />
                </Link>
            )}
            {links.map(({ link, name }) => (
                <a
                    key={name}
                    href={link}
                    className="p-1.5 rounded-md theme-surface-hover transition-colors duration-200 ease-in-out"
                >
                    <h3 className="text-base sm:text-lg leading-normal theme-text">
                        {name}
                    </h3>
                </a>
            ))}
        </div>
    );
}
