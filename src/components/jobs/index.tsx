"use client";

import { Dictionary } from "@/types";
import { Card, Typography } from "@metrom-xyz/ui";
import { JOBS_OPENINGS } from "@/common/jobs";
import Link from "next/link";
import { ArrowRightIcon } from "@/app/assets/arrow-right";
import { GlobeIcon } from "@/app/assets/globe";

interface JobsProps {
    dictionary: Dictionary["jobs"];
}

export function Jobs({ dictionary }: JobsProps) {
    return (
        <div className="w-full flex flex-col items-start gap-10">
            <h1 className="font-sans leading-10 text-4xl theme-text font-semibold text-center uppercase">
                {dictionary.title}
            </h1>
            <div className="w-full flex flex-col gap-10">
                <Card className="flex flex-col gap-2.5 !p-5">
                    <h2 className="text-xl2 leading-8 font-medium font-sans theme-text uppercase">
                        {dictionary.about.title}
                    </h2>
                    <Typography size="lg" className="max-w-[420px]">
                        {dictionary.about.metrom}
                    </Typography>
                </Card>
                <div className="w-full flex flex-col gap-3">
                    <h2 className="text-xl2 leading-8 font-medium font-sans theme-text uppercase">
                        {dictionary.openPositions}
                    </h2>
                    {JOBS_OPENINGS.filter(({ active }) => active).map((job) => (
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
                                    <Typography uppercase weight="medium">
                                        {dictionary.remote}
                                    </Typography>
                                </div>
                            </div>
                            <ArrowRightIcon />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
