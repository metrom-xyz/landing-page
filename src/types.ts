import type { SVGProps } from "react";
import { getDictionary } from "./dictionaries";

export enum Theme {
    Dark = "dark",
    Light = "light",
}

export type SVGIconProps = Omit<
    SVGProps<SVGSVGElement>,
    "dangerouslySetInnerHTML"
>;

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
