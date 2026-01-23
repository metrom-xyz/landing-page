"use client";

import { Dictionary } from "@/types";
import { Base } from "@/app/assets/logos/chains/base";
import { Algebra } from "@/app/assets/logos/dexes/algebra";
import { EntitiesGroup } from "./entities-group";
import { Entity, EntityProps } from "./entity";
import { Button } from "@metrom-xyz/ui";
import { DISCORD_LINK } from "@/common";
import { PlusSquareIcon } from "@/app/assets/plus-square-icon";
import { Taiko } from "@/app/assets/logos/chains/taiko";
import { Scroll } from "@/app/assets/logos/chains/scroll";
import { Unagi } from "@/app/assets/logos/dexes/unagi";
import { Telos } from "@/app/assets/logos/chains/telos";
import { Quill } from "@/app/assets/logos/liquity-v2-platforms/quill";
import { Ebisu } from "@/app/assets/logos/liquity-v2-platforms/ebisu";
import { Gnosis } from "@/app/assets/logos/chains/gnosis";
import { Sonic } from "@/app/assets/logos/chains/sonic";
import { Uniswap } from "@/app/assets/logos/dexes/uniswap";
import { BaseSwap } from "@/app/assets/logos/dexes/baseswap";
import { SilverSwap } from "@/app/assets/logos/dexes/silverswap";
import { Swapr } from "@/app/assets/logos/dexes/swapr";
import { Orki } from "@/app/assets/logos/liquity-v2-platforms/orki";
import { Velodrome } from "@/app/assets/logos/dexes/velodrome";
import { Oku } from "@/app/assets/logos/dexes/oku";
import { LightLinkPhoenix } from "@/app/assets/logos/chains/lightlink-phoenix";
import { Hemi } from "@/app/assets/logos/chains/hemi";
import { Amped } from "@/app/assets/logos/dexes/amped";
import { Swell } from "@/app/assets/logos/chains/swell";
import { Lens } from "@/app/assets/logos/chains/lens";
import { Carbon } from "@/app/assets/logos/dexes/carbon";
import { Sei } from "@/app/assets/logos/chains/sei";
import { Lumia } from "@/app/assets/logos/chains/lumia";
import { Morphex } from "@/app/assets/logos/dexes/morphex";
import { Aptos } from "@/app/assets/logos/chains/aptos";
import { Izumi } from "@/app/assets/logos/dexes/izumi";
import { Aave } from "@/app/assets/logos/aave";
import { Hydrex } from "@/app/assets/logos/dexes/hydrex";
import { Arbitrum } from "@/app/assets/logos/chains/arbitrum";
import { Plasma } from "@/app/assets/logos/chains/plasma";
import { Balancer } from "@/app/assets/logos/dexes/balancer";
import { Lithos } from "@/app/assets/logos/dexes/lithos";
import { Quickswap } from "@/app/assets/logos/dexes/quickswap";
import { Ambient } from "@/app/assets/logos/dexes/ambient";
import { Honeypop } from "@/app/assets/logos/dexes/honeypop";
import { Saga } from "@/app/assets/logos/chains/saga";
import { Hyperion } from "@/app/assets/logos/dexes/hyperion";

const CHAINS: EntityProps[] = [
    {
        name: "Aptos",
        icon: Aptos,
    },
    {
        name: "Base",
        icon: Base,
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
    {
        name: "Gnosis",
        icon: Gnosis,
    },
    {
        name: "Lumia",
        icon: Lumia,
    },
    {
        name: "Sonic",
        icon: Sonic,
    },
    {
        name: "LightLink",
        icon: LightLinkPhoenix,
    },
    {
        name: "Swell",
        icon: Swell,
    },
    {
        name: "Hemi",
        icon: Hemi,
    },
    {
        name: "Lens",
        icon: Lens,
    },
    {
        name: "Sei",
        icon: Sei,
    },
    {
        name: "Arbitrum",
        icon: Arbitrum,
    },
    {
        name: "Plasma",
        icon: Plasma,
    },
    {
        name: "Saga",
        icon: Saga,
    },
];

const DEXES: EntityProps[] = [
    {
        name: "Algebra",
        icon: Algebra,
    },
    {
        name: "Uniswap",
        icon: Uniswap,
    },
    {
        name: "Unagiswap",
        icon: Unagi,
    },
    {
        name: "Baseswap",
        icon: BaseSwap,
    },
    {
        name: "SilverSwap",
        icon: SilverSwap,
    },
    {
        name: "Oku",
        icon: Oku,
    },
    {
        name: "Swapr",
        icon: Swapr,
    },
    {
        name: "Velodrome",
        icon: Velodrome,
    },
    {
        name: "Carbon",
        icon: Carbon,
    },
    {
        name: "Amped",
        icon: Amped,
    },
    {
        name: "Morphex",
        icon: Morphex,
    },
    {
        name: "Izumi",
        icon: Izumi,
    },
    {
        name: "Hydrex",
        icon: Hydrex,
    },
    {
        name: "Balancer",
        icon: Balancer,
    },
    {
        name: "Lithos",
        icon: Lithos,
    },
    {
        name: "Quickswap",
        icon: Quickswap,
    },
    {
        name: "Ambient",
        icon: Ambient,
    },
    {
        name: "Honeypop",
        icon: Honeypop,
    },
    {
        name: "Hyperion",
        icon: Hyperion,
    },
];

const LIQUITY_V2_PLATFORMS: EntityProps[] = [
    {
        name: "Quill",
        icon: Quill,
    },
    {
        name: "Ebisu",
        icon: Ebisu,
    },
    {
        name: "Orki",
        icon: Orki,
    },
];

const LENDING_PLATFORMS: EntityProps[] = [
    {
        name: "Aave",
        icon: Aave,
    },
];

interface PartnersProps {
    dictionary: Dictionary["home"]["ecosystem"];
}

export function Ecosystem({ dictionary }: PartnersProps) {
    return (
        <section id="ecosystem" className="w-full md:px-28">
            <div className="w-full flex flex-col gap-10 px-4 py-7 md:p-10 theme-surface rounded-4xl">
                <h3 className="font-sans leading-10 text-4xl theme-text font-semibold text-center">
                    {dictionary.title}
                </h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-6 flex-wrap">
                    <EntitiesGroup title={dictionary.chains}>
                        {CHAINS.map((chain) => (
                            <Entity key={chain.name} {...chain} />
                        ))}
                    </EntitiesGroup>
                    <EntitiesGroup title={dictionary.dexes}>
                        {DEXES.map((amm) => (
                            <Entity key={amm.name} {...amm} />
                        ))}
                    </EntitiesGroup>
                    <EntitiesGroup title={dictionary.moneyMarkets}>
                        {LIQUITY_V2_PLATFORMS.map((liquityV2) => (
                            <Entity key={liquityV2.name} {...liquityV2} />
                        ))}
                    </EntitiesGroup>
                    <EntitiesGroup title={dictionary.lending}>
                        {LENDING_PLATFORMS.map((platform) => (
                            <Entity key={platform.name} {...platform} />
                        ))}
                    </EntitiesGroup>
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
            </div>
        </section>
    );
}
