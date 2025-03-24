"use client";

import { EfficientIcon } from "@/app/assets/efficient-icon";
import { RealtimeIcon } from "@/app/assets/realtime-icon";
import { ShieldIcon } from "@/app/assets/shield-icon";
import { AprIcon } from "@/app/assets/apr-icon";
import { Feature } from "./feature";
import type { Dictionary } from "@/types";

interface FeaturesProps {
    dictionary: Dictionary["features"];
}

export function Features({ dictionary }: FeaturesProps) {
    return (
        <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-16 md:px-28">
            <Feature
                icon={EfficientIcon}
                title={dictionary.efficient.title}
                description={dictionary.efficient.description}
            />
            <Feature
                icon={RealtimeIcon}
                title={dictionary.KPI.title}
                description={dictionary.KPI.description}
            />
            <Feature
                icon={ShieldIcon}
                title={dictionary.range.title}
                description={dictionary.range.description}
            />
            <Feature
                icon={AprIcon}
                title={dictionary.APR.title}
                description={dictionary.APR.description}
            />
            <Feature
                icon={ShieldIcon}
                title={dictionary.points.title}
                description={dictionary.points.description}
            />
            <Feature
                icon={ShieldIcon}
                title={dictionary.flow.title}
                description={dictionary.flow.description}
            />
        </div>
    );
}
