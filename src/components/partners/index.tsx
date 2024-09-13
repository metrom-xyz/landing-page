"use client";

import { useTranslations } from "next-intl";
import { FunctionComponent } from "react";
import { SVGIconProps } from "@/types";
import { Base } from "@/app/assets/logos/base";
import { Kim } from "@/app/assets/logos/kim";
import { Swapsicle } from "@/app/assets/logos/swapsicle";
import { Algebra } from "@/app/assets/logos/algebra";
import { Mantle } from "@/app/assets/logos/mantle";
import { ParnersGroup } from "./parters-group";
import { Partner } from "./partner";
import { Typography } from "@metrom-xyz/ui";
import { Hats } from "@/app/assets/logos/hats";

interface Partner {
    name: string;
    icon: FunctionComponent<SVGIconProps>;
}

const CHAINS: Partner[] = [
    {
        name: "Base",
        icon: Base,
    },
    {
        name: "Mantle",
        icon: Mantle,
    },
];

const AMMS: Partner[] = [
    {
        name: "Kim",
        icon: Kim,
    },
    {
        name: "Swapsicle",
        icon: Swapsicle,
    },
    {
        name: "Algebra",
        icon: Algebra,
    },
];

const AUDITORS: Partner[] = [
    {
        name: "Hats",
        icon: Hats,
    },
];

export function Partners() {
    const t = useTranslations("partners");

    return (
        <section className="w-full flex flex-col gap-10 p-10 bg-white rounded-4xl">
            <div className="text-center">
                <Typography variant="xl4" className="font-semibold">
                    {t("title")}
                </Typography>
            </div>
            <div className="flex gap-6 flex-wrap">
                <ParnersGroup title={t("chains")}>
                    {CHAINS.map((chain) => (
                        <Partner
                            key={chain.name}
                            icon={chain.icon}
                            name={chain.name}
                        />
                    ))}
                </ParnersGroup>
                <ParnersGroup title={t("amms")}>
                    {AMMS.map((amm) => (
                        <Partner
                            key={amm.name}
                            icon={amm.icon}
                            name={amm.name}
                        />
                    ))}
                </ParnersGroup>
                <ParnersGroup title={t("auditors")}>
                    {AUDITORS.map((auditor) => (
                        <Partner
                            key={auditor.name}
                            icon={auditor.icon}
                            name={auditor.name}
                        />
                    ))}
                </ParnersGroup>
            </div>
        </section>
    );
}
