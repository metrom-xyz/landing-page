import { Typography } from "@metrom-xyz/ui";
import { ReactNode } from "react";

interface EntitiesGroupProps {
    title: string;
    children: ReactNode;
}

export function EntitiesGroup({ title, children }: EntitiesGroupProps) {
    return (
        <div className="w-fit h-fit md:p-7 flex flex-col gap-6 md:theme-surface-2 rounded-2xl">
            <Typography className="text-xl2! font-semibold! text-center md:text-left">
                {title}
            </Typography>
            <div className="flex justify-center flex-wrap gap-3.5 md:gap-8">
                {children}
            </div>
        </div>
    );
}
