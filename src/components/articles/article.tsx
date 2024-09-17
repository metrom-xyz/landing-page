import { Button, Typography } from "@metrom-xyz/ui";
import { useTranslations } from "next-intl";

interface ArticleProps {
    title: string;
    link: string;
    bgClassName: string;
}

export function Article({ title, link, bgClassName }: ArticleProps) {
    const t = useTranslations("articles");

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div
                className={`bg-white w-full md:w-fit min-h-[344px] md:min-h-[500px] max-w-[413px] flex flex-col items-center text-center gap-8 p-10 rounded-2xl bg-bottom bg-no-repeat ${bgClassName}`}
            >
                <Typography
                    variant="lg"
                    uppercase
                    weight="medium"
                    className="text-gray-600 leading-none"
                >
                    {t("title")}
                </Typography>
                <h2 className="text-4xl md:text-xl5 font-sans font-semibold flex-1 leading-none">
                    {title}
                </h2>
                <Button className={{ root: "pointer-events-none" }}>
                    {t("read")}
                </Button>
            </div>
        </a>
    );
}
