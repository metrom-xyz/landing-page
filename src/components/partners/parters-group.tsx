import { Typography } from "@metrom-xyz/ui";
import { ReactNode } from "react";

interface ParnersGroupProps {
    title: string;
    children: ReactNode;
}

export function ParnersGroup({ title, children }: ParnersGroupProps) {
    return (
        <div className="w-fit h-fit md:p-7 flex flex-col gap-6 md:bg-gray-100 rounded-2xl">
            <Typography className="text-xl2 font-semibold text-center md:text-left">
                {title}
            </Typography>
            <div className="flex justify-center flex-wrap gap-3.5 md:gap-8">
                {children}
            </div>
        </div>
    );
}
