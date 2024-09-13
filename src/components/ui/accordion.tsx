"use client";

import { ChrevronDown } from "@/app/assets/chevron-down";
import { Typography } from "@metrom-xyz/ui";
import { ReactNode, useState } from "react";

interface AccordionProps {
    title: string;
    children: ReactNode;
}

export function Accordion({ title, children }: AccordionProps) {
    const [open, setOpen] = useState(false);

    function handleOnToggleOpen() {
        setOpen((prevState) => !prevState);
    }

    return (
        <div className="w-full flex flex-col bg-white rounded-2xl">
            <div
                onClick={handleOnToggleOpen}
                className="flex items-center justify-between w-full p-6 select-none cursor-pointer rounded-2xl"
            >
                <Typography variant="xl" weight="medium">
                    {title}
                </Typography>
                <ChrevronDown
                    className={`${open ? "rotate-180" : ""} w-3 h-3`}
                />
            </div>
            {open && <div className="w-full px-6 pb-6">{children}</div>}
        </div>
    );
}
