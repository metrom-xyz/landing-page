import { Button, Typography } from "@metrom-xyz/ui";
import { ArticlesProps } from ".";
import { FunctionComponent } from "react";
import { SVGIconProps } from "@/types";

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
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="relative overflow-hidden bg-white w-full md:w-fit min-h-[344px] md:min-h-[500px] max-w-[413px] flex flex-col items-center text-center gap-8 p-10 rounded-2xl transition-colors hover:bg-gray-200 ease-in-out">
                <div className="absolute -bottom-16 md:bottom-0 md:h-auto w-full">
                    <Illustration className="fill-none w-full h-full" />
                </div>
                <Typography
                    variant="lg"
                    uppercase
                    weight="medium"
                    className="text-gray-600 leading-none"
                >
                    {dictionary.title}
                </Typography>
                <h2 className="text-4xl md:text-xl5 font-sans font-semibold flex-1 leading-none">
                    {title}
                </h2>
                <Button className={{ root: "pointer-events-none" }}>
                    {dictionary.read}
                </Button>
            </div>
        </a>
    );
}
