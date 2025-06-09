"use client";

import { AprIcon } from "@/app/assets/apr-icon";
import { FlexibleIcon } from "@/app/assets/flexible-icon";
import { KpiIcon } from "@/app/assets/kpi-icon";
import { RangeIcon } from "@/app/assets/range-icon";
import { PointsIcon } from "@/app/assets/points-icon";
import { Feature } from "./feature";
import type { Dictionary } from "@/types";
import { FlowIcon } from "@/app/assets/flow-icon";

interface FeaturesProps {
    dictionary: Dictionary["home"]["features"];
}

export function Features({ dictionary }: FeaturesProps) {
    return (
        <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-16 md:px-28">
            <Feature
                icon={FlexibleIcon}
                title={dictionary.efficient.title}
                description={dictionary.efficient.description}
            />
            <Feature
                icon={KpiIcon}
                title={dictionary.KPI.title}
                description={dictionary.KPI.description}
            />
            <Feature
                icon={RangeIcon}
                title={dictionary.range.title}
                description={dictionary.range.description}
            />
            <Feature
                icon={AprIcon}
                title={dictionary.APR.title}
                description={dictionary.APR.description}
            />
            <Feature
                icon={PointsIcon}
                title={dictionary.points.title}
                description={dictionary.points.description}
            />
            <Feature
                icon={FlowIcon}
                title={dictionary.flow.title}
                description={dictionary.flow.description}
            />
        </div>
    );
}
