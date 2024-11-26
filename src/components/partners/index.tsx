"use client";

import { FunctionComponent } from "react";
import { Dictionary, SVGIconProps } from "@/types";
import { Base } from "@/app/assets/logos/base";
import { Mode } from "@/app/assets/logos/mode";
import { Kim } from "@/app/assets/logos/kim";
import { Swapsicle } from "@/app/assets/logos/swapsicle";
import { Algebra } from "@/app/assets/logos/algebra";
import { Mantle } from "@/app/assets/logos/mantle";
import { ParnersGroup } from "./parters-group";
import { Partner } from "./partner";
import { Button } from "@metrom-xyz/ui";
import { Hats } from "@/app/assets/logos/hats";
import { DISCORD_LINK } from "@/common";
import { OxCommit } from "@/app/assets/logos/0x-commit";
import { PlusSquareIcon } from "@/app/assets/plus-square-icon";
import { Taiko } from "@/app/assets/logos/taiko";
import { Panko } from "@/app/assets/logos/panko";
import { Scroll } from "@/app/assets/logos/scroll";
import { Scribe } from "@/app/assets/logos/scribe";
import { BaseSwap } from "@/app/assets/logos/baseswap";

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
        name: "Mode",
        icon: Mode,
    },
    {
        name: "Mantle",
        icon: Mantle,
    },
    {
        name: "Taiko",
        icon: Taiko,
    },
    {
        name: "Scroll",
        icon: Scroll,
    },
];

const DEXES: Partner[] = [
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
    {
        name: "Panko",
        icon: Panko,
    },
    {
        name: "Scribe",
        icon: Scribe,
    },
    {
        name: "BaseSwap",
        icon: BaseSwap,
    },
];

const AUDITORS: Partner[] = [
    {
        name: "Hats",
        icon: Hats,
    },
    {
        name: "0xCommit",
        icon: OxCommit,
    },
];

interface PartnersProps {
    dictionary: Dictionary["partners"];
}

export function Partners({ dictionary }: PartnersProps) {
    return (
        <section className="w-full flex flex-col gap-10 px-4 py-7 md:p-10 bg-white rounded-4xl">
            <h3 className="font-sans leading-10 text-4xl font-semibold text-center">
                {dictionary.title}
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-6 flex-wrap">
                <ParnersGroup title={dictionary.chains}>
                    {CHAINS.map((chain) => (
                        <Partner
                            key={chain.name}
                            icon={chain.icon}
                            name={chain.name}
                        />
                    ))}
                </ParnersGroup>
                <ParnersGroup title={dictionary.dexes}>
                    {DEXES.map((amm) => (
                        <Partner
                            key={amm.name}
                            icon={amm.icon}
                            name={amm.name}
                        />
                    ))}
                </ParnersGroup>
                <ParnersGroup title={dictionary.auditors}>
                    {AUDITORS.map((auditor) => (
                        <Partner
                            key={auditor.name}
                            icon={auditor.icon}
                            name={auditor.name}
                        />
                    ))}
                </ParnersGroup>
            </div>
            <Button
                icon={PlusSquareIcon}
                href={DISCORD_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={{ root: "self-center" }}
            >
                {dictionary.add}
            </Button>
        </section>
    );
}
