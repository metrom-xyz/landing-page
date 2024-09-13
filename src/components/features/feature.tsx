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
            <Typography variant="xl2" className="font-semibold">
                {title}
            </Typography>
            <Typography light weight="medium" className="leading-normal">
                {description}
            </Typography>
        </div>
    );
}
