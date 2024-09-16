"use client";

import { ChrevronDownIcon } from "@/app/assets/chevron-down-icon";
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
                className="flex items-center justify-between w-full p-6 select-none cursor-pointer rounded-2xl duration-200 ease-in-out transition-colors hover:bg-gray-200"
            >
                <Typography variant="xl" weight="medium">
                    {title}
                </Typography>
                <ChrevronDownIcon
                    className={`${open ? "rotate-180" : ""} w-3 h-3`}
                />
            </div>
            {open && <div className="w-full px-6 pb-6">{children}</div>}
        </div>
    );
}
