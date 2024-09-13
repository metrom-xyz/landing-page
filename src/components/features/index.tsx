"use client";

import { useTranslations } from "next-intl";
import { EfficientIcon } from "@/app/assets/efficient-icon";
import { RealtimeIcon } from "@/app/assets/realtime-icon";
import { ShieldIcon } from "@/app/assets/shield-icon";
import { Feature } from "./feature";

export function Features() {
    const t = useTranslations("features");

    return (
        <div className="flex items-center gap-20 md:px-28">
            <Feature
                icon={EfficientIcon}
                title={t("efficient.title")}
                description={t("efficient.description")}
            />
            <Feature
                icon={RealtimeIcon}
                title={t("analytics.title")}
                description={t("analytics.description")}
            />
            <Feature
                icon={ShieldIcon}
                title={t("management.title")}
                description={t("management.description")}
            />
        </div>
    );
}
