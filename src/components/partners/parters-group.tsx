import { Typography } from "@metrom-xyz/ui";
import { ReactNode } from "react";

interface ParnersGroupProps {
    title: string;
    children: ReactNode;
}

export function ParnersGroup({ title, children }: ParnersGroupProps) {
    return (
        <div className="w-fit h-fit p-7 flex flex-col gap-6 bg-gray-100 rounded-2xl">
            <Typography variant="xl2" className="font-semibold">
                {title}
            </Typography>
            <div className="flex gap-8">{children}</div>
        </div>
    );
}
