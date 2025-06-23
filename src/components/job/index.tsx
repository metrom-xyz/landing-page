"use client";

import { BriefcaseIcon } from "@/app/assets/briefcase";
import { GlobeIcon } from "@/app/assets/globe";
import { Dictionary, JobDescriptor } from "@/types";
import { Card, TextField, Typography } from "@metrom-xyz/ui";
import { ListSection } from "../jobs/list-section";
import { Section } from "../jobs/section";
import { MailboxIcon } from "@/app/assets/mailbox";
import { MetromCompact } from "@/app/assets/logos/metrom-compact";
import { Navigation } from "../navigation";

interface JobProps extends JobDescriptor {
    dictionary: Dictionary;
}

export function Job({
    dictionary: { navigation, job },
    title,
    type,
    location,
    role,
    responsibilities,
    requirements,
    niceToHave,
    workingConditions,
}: JobProps) {
    return (
        <div className="w-full flex items-center flex-col gap-16">
            <div className="flex md:flex-1 flex-col items-center gap-16 w-full max-w-screen-xl">
                <div className="w-full flex flex-col items-start gap-10">
                    <div className="w-full max-w-screen-xl">
                        <Navigation
                            dicationary={navigation}
                            links={[]}
                            goBackTo="/jobs"
                        />
                    </div>
                    <h1 className="font-sans leading-10 text-4xl theme-text font-semibold text-center uppercase">
                        {title}
                    </h1>
                    <div className="w-full flex flex-col gap-3">
                        <div className="flex flex-col md:flex-row gap-3">
                            <Card className="!p-5">
                                <TextField
                                    label={job.location}
                                    value={
                                        <div className="flex gap-2 items-center">
                                            <GlobeIcon className="w-5 h-5" />
                                            <Typography
                                                size="xl"
                                                weight="medium"
                                            >
                                                {location}
                                            </Typography>
                                        </div>
                                    }
                                />
                            </Card>
                            <Card className="!p-5">
                                <TextField
                                    label={job.contractType}
                                    value={
                                        <div className="flex gap-2 items-center">
                                            <BriefcaseIcon className="w-5 h-5" />
                                            <Typography
                                                size="xl"
                                                weight="medium"
                                            >
                                                {type}
                                            </Typography>
                                        </div>
                                    }
                                />
                            </Card>
                        </div>
                        <Card className="flex flex-col gap-6 !p-5">
                            <Section
                                title={job.roleOverview}
                                description={role}
                            />
                            <ListSection
                                title={job.responsibilities}
                                items={responsibilities}
                            />
                            <ListSection
                                title={job.requirements}
                                items={requirements}
                            />
                            <ListSection
                                title={job.niceToHave}
                                items={niceToHave}
                            />
                            <ListSection
                                title={job.workingConditions}
                                items={workingConditions}
                            />
                            <Section
                                title={job.aboutTheTeam}
                                description={job.team}
                            />
                            <Section
                                title={job.aboutMetrom}
                                description={job.metrom}
                            />
                        </Card>
                        <div className="flex flex-col md:flex-row gap-3">
                            <Card className="!p-5">
                                <TextField
                                    label={job.applications}
                                    value={
                                        <div className="flex gap-2 items-center">
                                            <MailboxIcon className="w-5 h-5" />
                                            <a
                                                href="mailto:jobs@metrom.xyz"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-sans theme-text font-medium text-xl"
                                            >
                                                jobs@metrom.xyz
                                            </a>
                                        </div>
                                    }
                                />
                            </Card>
                            <Card className="!p-5">
                                <TextField
                                    label={job.project}
                                    value={
                                        <div className="flex gap-2 items-center">
                                            <MetromCompact className="w-5 h-5" />
                                            <a
                                                href="https://app.metrom.xyz"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-sans theme-text font-medium text-xl"
                                            >
                                                metrom.xyz
                                            </a>
                                        </div>
                                    }
                                />
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
