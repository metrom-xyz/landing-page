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
        <div className="w-full flex flex-col text-center items-center gap-4">
            <div className="p-5 bg-white rounded-2xl">
                <Icon />
            </div>
            <Typography className="text-2xl font-semibold">{title}</Typography>
            <Typography
                weight="medium"
                className="text-lg leading-normal text-gray-600"
            >
                {description}
            </Typography>
        </div>
    );
}
