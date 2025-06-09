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

export interface JobDescriptor {
    id: string;
    active: boolean;
    title: string;
    location: string;
    type: string;
    shortDescription: string;
    role: string;
    responsibilities: string[];
    requirements: string[];
    niceToHave: string[];
    workingConditions: string[];
}
