import { SVGIconProps } from "@/types";
import { Chip, Typography } from "@metrom-xyz/ui";
import { FunctionComponent } from "react";

export interface EntityProps {
    icon: FunctionComponent<SVGIconProps>;
    name: string;
    soon?: boolean;
}

export function Entity({ icon: Icon, name, soon }: EntityProps) {
    return (
        <div className="flex flex-col gap-3 items-center">
            <div className="flex relative justify-center items-center bg-black rounded-2xl h-24 w-24">
                {soon && (
                    <Chip active className={{ root: "absolute -top-4" }}>
                        Soon
                    </Chip>
                )}
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
