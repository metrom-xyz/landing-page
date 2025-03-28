"use client";

import { SVGIconProps } from "@/types";
import { Typography } from "@metrom-xyz/ui";
import { FunctionComponent } from "react";

interface FeatureProps {
    icon: FunctionComponent<SVGIconProps>;
    title: string;
    description: string;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
    return (
        <div className="w-[300px] flex flex-col text-center items-center gap-4">
            <div className="p-4 theme-surface rounded-2xl">
                <Icon className="w-9 h-9 theme-text" />
            </div>
            <h4 className="font-sans text-xl2 leading-8 font-semibold theme-text">
                {title}
            </h4>
            <Typography
                weight="medium"
                className="text-lg! leading-normal! text-gray-600! dark:text-gray-400!"
            >
                {description}
            </Typography>
        </div>
    );
}
