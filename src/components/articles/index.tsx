"use client";

import { Dictionary } from "@/types";
import { Article } from "./article";
import { ArticleGraphic1 } from "@/app/assets/article-graphic-1";
import { ArticleGraphic2 } from "@/app/assets/article-graphic-2";
import { ArticleGraphic3 } from "@/app/assets/article-graphic-3";

const ARTICLES = [
    {
        title: "Introducing Metrom",
        link: "https://medium.com/@metromxyz/introducing-metrom-design-your-incentives-to-ammplify-liquidity-0fe3068774e3",
        illustration: ArticleGraphic1,
    },
    {
        title: "Metrom quick start guide",
        link: "https://medium.com/@metromxyz/metrom-quick-start-guide-0f85d1a05703",
        illustration: ArticleGraphic2,
    },
    {
        title: "Inside our Hats Finance audit",
        link: "https://medium.com/@metromxyz/inside-our-hats-finance-audit-the-key-findings-dd0cf36a842a",
        illustration: ArticleGraphic3,
    },
    {
        title: "Uniswap case study",
        link: "https://medium.com/@metromxyz/case-study-how-metroms-kpi-based-incentives-outperform-traditional-liquidity-models-3a04ea582713",
        illustration: ArticleGraphic3,
    },
    {
        title: "5 power uses of KPI-based farming",
        link: "https://medium.com/@metromxyz/5-power-uses-of-kpi-based-farming-cf90f812ead1",
        illustration: ArticleGraphic2,
    },
    {
        title: "Range-based incentives",
        link: "https://medium.com/@metromxyz/range-based-incentives-optimizing-liquidity-in-amms-with-metrom-bb31a877c1e1",
        illustration: ArticleGraphic1,
    },
];

export interface ArticlesProps {
    dictionary: Dictionary["articles"];
}

export function Articles({ dictionary }: ArticlesProps) {
    return (
        <div className="flex gap-5 justify-center flex-wrap">
            {ARTICLES.map((article, index) => (
                <Article
                    key={index}
                    title={article.title}
                    link={article.link}
                    illustration={article.illustration}
                    dictionary={dictionary}
                />
            ))}
        </div>
    );
}
