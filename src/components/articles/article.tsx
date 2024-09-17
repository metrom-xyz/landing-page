import { Button, Typography } from "@metrom-xyz/ui";
import { useTranslations } from "next-intl";

interface ArticleProps {
    title: string;
    link: string;
}

export function Article({ title, link }: ArticleProps) {
    const t = useTranslations("articles");

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="w-full md:w-fit min-h-[344px] md:min-h-[500px] max-w-[413px] flex flex-col items-center text-center gap-8 p-10 bg-white rounded-2xl duration-200 ease-in-out transition-colors hover:bg-gray-200">
                <Typography
                    variant="lg"
                    uppercase
                    weight="medium"
                    className="text-gray-600 leading-none"
                >
                    {t("title")}
                </Typography>
                <Typography className="text-4xl md:text-xl5 font-semibold flex-1">
                    {title}
                </Typography>
                <Button className={{ root: "pointer-events-none" }}>
                    {t("read")}
                </Button>
            </div>
        </a>
    );
}
