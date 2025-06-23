"use client";

import { Dictionary } from "@/types";
import { Typography } from "@metrom-xyz/ui";
import { JOBS_OPENINGS } from "@/common/jobs";
import Link from "next/link";
import { ArrowRightIcon } from "@/app/assets/arrow-right";
import { GlobeIcon } from "@/app/assets/globe";
import { Metrom } from "@/app/assets/logos/metrom";
import { Navigation } from "../navigation";

interface JobsProps {
    dictionary: Dictionary;
}

export function Jobs({ dictionary: { navigation, jobs } }: JobsProps) {
    return (
        <div className="w-full flex items-center flex-col gap-16">
            <div className="w-full max-w-screen-xl">
                <Navigation dicationary={navigation} links={[]} goBackTo="/" />
            </div>
            <div className="flex md:flex-1 flex-col items-center gap-16 w-full max-w-screen-xl">
                <div className="w-full flex flex-col items-center gap-16">
                    <section className="w-full flex flex-col gap-5 items-center text-center justify-center max-w-screen-xl p-8 md:p-16 rounded-4xl theme-surface">
                        <Metrom className="mb-5 text-black dark:text-white" />
                        <div className="flex flex-col items-center">
                            <Typography
                                size="xl5"
                                className="text-[2.5rem]! md:text-5xl! leading-none! font-bold! max-w-2xl whitespace-pre-line"
                            >
                                {jobs.title1}
                            </Typography>
                            <Typography
                                size="xl5"
                                className="text-[2.5rem]! md:text-5xl! leading-none! font-bold! max-w-4xl whitespace-pre-line"
                            >
                                {jobs.title2}
                            </Typography>
                        </div>
                        <h2 className="text-xl2 leading-8 max-w-xl font-sans text-gray-600 dark:text-gray-400">
                            {jobs.about.metrom}
                        </h2>
                    </section>
                    <div className="w-full flex flex-col gap-10 max-w-screen-xl">
                        <div className="w-full flex flex-col gap-3">
                            <h2 className="text-xl2 leading-8 font-medium font-sans theme-text uppercase">
                                {jobs.openPositions}
                            </h2>
                            {JOBS_OPENINGS.filter(({ active }) => active).map(
                                (job) => (
                                    <Link
                                        key={job.id}
                                        href={`/jobs/${job.id}`}
                                        className="w-full theme-surface p-5 rounded-2xl flex justify-between items-center gap-2 theme-surface-hover transition-colors duration-200"
                                    >
                                        <div className="w-full flex flex-col gap-2.5">
                                            <h3 className="font-sans text-xl theme-text font-medium uppercase">
                                                {job.title}
                                            </h3>
                                            <div className="flex items-center gap-2">
                                                <GlobeIcon className="w-5 h-5" />
                                                <Typography
                                                    uppercase
                                                    weight="medium"
                                                >
                                                    {jobs.remote}
                                                </Typography>
                                            </div>
                                        </div>
                                        <ArrowRightIcon />
                                    </Link>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
