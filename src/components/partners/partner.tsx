import { SVGIconProps } from "@/types";
import { Typography } from "@metrom-xyz/ui";
import { FunctionComponent } from "react";

interface PartnerProps {
    icon: FunctionComponent<SVGIconProps>;
    name: string;
}

export function Partner({ icon: Icon, name }: PartnerProps) {
    return (
        <div className="flex flex-col gap-3 items-center">
            <div className="bg-black p-5 rounded-2xl h-24 w-24">
                <Icon className="h-full w-full" />
            </div>
            <Typography light weight="medium" className="leading-normal">
                {name}
            </Typography>
        </div>
    );
}
