"use client";

import { Dictionary } from "@/types";
import { Base } from "@/app/assets/logos/base";
import { Mode } from "@/app/assets/logos/mode";
import { Algebra } from "@/app/assets/logos/algebra";
import { Mantle } from "@/app/assets/logos/mantle";
import { ParnersGroup } from "./parters-group";
import { Partner, PartnerProps } from "./partner";
import { Button } from "@metrom-xyz/ui";
import { Hats } from "@/app/assets/logos/hats";
import { DISCORD_LINK } from "@/common";
import { OxCommit } from "@/app/assets/logos/0x-commit";
import { PlusSquareIcon } from "@/app/assets/plus-square-icon";
import { Taiko } from "@/app/assets/logos/taiko";
import { Scroll } from "@/app/assets/logos/scroll";
import { Unagi } from "@/app/assets/logos/unagi";
import { Telos } from "@/app/assets/logos/telos";
import { Quill } from "@/app/assets/logos/liquity-v2-platforms/quill";
import { Ebisu } from "@/app/assets/logos/liquity-v2-platforms/ebisu";

const CHAINS: PartnerProps[] = [
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
    {
        name: "Telos",
        icon: Telos,
    },
];

const DEXES: PartnerProps[] = [
    {
        name: "Algebra",
        icon: Algebra,
    },
    {
        name: "UnagiSwap",
        icon: Unagi,
    },
];

const LIQUITY_V2: PartnerProps[] = [
    {
        name: "Quill",
        icon: Quill,
    },
    {
        name: "Ebisu",
        icon: Ebisu,
    },
];

const AUDITORS: PartnerProps[] = [
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
                        <Partner key={chain.name} {...chain} />
                    ))}
                </ParnersGroup>
                <ParnersGroup title={dictionary.dexes}>
                    {DEXES.map((amm) => (
                        <Partner key={amm.name} {...amm} />
                    ))}
                </ParnersGroup>
                <ParnersGroup title={dictionary.liquityV2}>
                    {LIQUITY_V2.map((liquityV2) => (
                        <Partner key={liquityV2.name} {...liquityV2} />
                    ))}
                </ParnersGroup>
                <ParnersGroup title={dictionary.auditors}>
                    {AUDITORS.map((auditor) => (
                        <Partner key={auditor.name} {...auditor} />
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
