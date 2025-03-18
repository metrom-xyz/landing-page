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
            <div className="flex justify-center items-center bg-black rounded-2xl h-24 w-24">
                <Icon className="h-14 w-14" />
            </div>
            <Typography
                weight="medium"
                className="leading-normal! text-gray-600!"
            >
                {name}
            </Typography>
        </div>
    );
}
