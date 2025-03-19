"use client";

import { EfficientIcon } from "@/app/assets/efficient-icon";
import { RealtimeIcon } from "@/app/assets/realtime-icon";
import { ShieldIcon } from "@/app/assets/shield-icon";
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
                title={dictionary.simple.title}
                description={dictionary.simple.description}
            />
            <Feature
                icon={ShieldIcon}
                title={dictionary.kpi.title}
                description={dictionary.kpi.description}
            />
        </div>
    );
}
