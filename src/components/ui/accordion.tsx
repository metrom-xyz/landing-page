"use client";

import { ChrevronDownIcon } from "@/app/assets/chevron-down-icon";
import { easings, useSpring, animated, useTransition } from "@react-spring/web";
import { ReactNode, useEffect, useRef, useState } from "react";

interface AccordionProps {
    title: string;
    children: ReactNode;
}

export function Accordion({ title, children }: AccordionProps) {
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [springStyles, springApi] = useSpring(
        () => ({
            height: "76px",
        }),
        [],
    );

    const transition = useTransition(open, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 200, easing: easings.easeInOutCubic },
    });

    useEffect(() => {
        springApi.start({
            height:
                (open
                    ? wrapperRef?.current?.offsetHeight
                    : rootRef.current?.offsetHeight) + "px",
            config: { duration: 200, easing: easings.easeInOutCubic },
        });
    }, [springApi, open]);

    function handleOnToggleOpen() {
        setOpen((prevState) => !prevState);
    }

    return (
        <animated.div
            style={springStyles}
            className="w-full flex flex-col bg-white rounded-2xl"
        >
            <div ref={wrapperRef}>
                <div
                    ref={rootRef}
                    onClick={handleOnToggleOpen}
                    className="flex items-center justify-between w-full p-6 select-none cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out hover:bg-gray-200"
                >
                    <h5 className="font-medium font-sans text-xl leading-7">
                        {title}
                    </h5>
                    <ChrevronDownIcon
                        className={`${open ? "rotate-180" : ""} w-3 h-3`}
                    />
                </div>
                {transition(
                    (styles, open) =>
                        open && (
                            <animated.div style={styles} className="w-full p-6">
                                {children}
                            </animated.div>
                        ),
                )}
            </div>
        </animated.div>
    );
}
