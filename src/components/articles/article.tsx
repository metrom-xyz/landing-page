import { Button, Typography } from "@metrom-xyz/ui";
import { ArticlesProps } from ".";
import { FunctionComponent } from "react";
import { SVGIconProps } from "@/types";
import { ExternalIcon } from "@/app/assets/external-icon";

interface ArticleProps {
    title: string;
    link: string;
    illustration: FunctionComponent<SVGIconProps>;
    dictionary: ArticlesProps["dictionary"];
}

export function Article({
    title,
    link,
    illustration: Illustration,
    dictionary,
}: ArticleProps) {
    return (
        <div className="relative overflow-hidden theme-surface w-full md:w-fit min-h-[344px] md:min-h-[500px] max-w-[413px] flex flex-col items-center text-center gap-8 p-10 rounded-2xl">
            <div className="absolute -bottom-16 md:bottom-0 md:h-auto w-full z-0">
                <Illustration className="fill-none w-full h-full dark:text-zinc-500 text-zinc-400" />
            </div>
            <Typography
                size="lg"
                uppercase
                weight="medium"
                className="text-gray-600! dark:text-gray-400! leading-none! z-10"
            >
                {dictionary.title}
            </Typography>
            <h2 className="text-4xl md:text-xl5 font-sans font-semibold theme-text flex-1 leading-none z-10">
                {title}
            </h2>
            <Button
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                icon={ExternalIcon}
                iconPlacement="right"
                className={{ root: "z-10", icon: "h-3! w-3!" }}
            >
                {dictionary.read}
            </Button>
        </div>
    );
}
