"use client";

import { BriefcaseIcon } from "@/app/assets/briefcase";
import { GlobeIcon } from "@/app/assets/globe";
import { Dictionary, JobDescriptor } from "@/types";
import { Card, TextField, Typography } from "@metrom-xyz/ui";
import { ListSection } from "./list-section";
import { Section } from "./section";
import { MailboxIcon } from "@/app/assets/mailbox";
import { MetromCompact } from "@/app/assets/logos/metrom-compact";
import { Metrom } from "@/app/assets/logos/metrom";

interface JobProps extends JobDescriptor {
    dictionary: Dictionary["job"];
}

export function Job({
    dictionary,
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
        <div className="w-full flex flex-col items-start gap-10">
            <Metrom className="text-black dark:text-white" />
            <h1 className="font-sans leading-10 text-4xl theme-text font-semibold text-center uppercase">
                {title}
            </h1>
            <div className="w-full flex flex-col gap-3">
                <div className="flex flex-col md:flex-row gap-3">
                    <Card className="!p-5">
                        <TextField
                            label={dictionary.location}
                            value={
                                <div className="flex gap-2 items-center">
                                    <GlobeIcon className="w-5 h-5" />
                                    <Typography size="xl" weight="medium">
                                        {location}
                                    </Typography>
                                </div>
                            }
                        />
                    </Card>
                    <Card className="!p-5">
                        <TextField
                            label={dictionary.contractType}
                            value={
                                <div className="flex gap-2 items-center">
                                    <BriefcaseIcon className="w-5 h-5" />
                                    <Typography size="xl" weight="medium">
                                        {type}
                                    </Typography>
                                </div>
                            }
                        />
                    </Card>
                </div>
                <Card className="flex flex-col gap-6 !p-5">
                    <Section
                        title={dictionary.aboutMetrom}
                        description={dictionary.metrom}
                    />
                    <Section
                        title={dictionary.roleOverview}
                        description={role}
                    />
                    <ListSection
                        title={dictionary.responsibilities}
                        items={responsibilities}
                    />
                    <ListSection
                        title={dictionary.requirements}
                        items={requirements}
                    />
                    <ListSection
                        title={dictionary.niceToHave}
                        items={niceToHave}
                    />
                    <ListSection
                        title={dictionary.workingConditions}
                        items={workingConditions}
                    />
                    <Section
                        title={dictionary.aboutTheTeam}
                        description={dictionary.team}
                    />
                </Card>
                <div className="flex flex-col md:flex-row gap-3">
                    <Card className="!p-5">
                        <TextField
                            label={dictionary.applications}
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
                            label={dictionary.project}
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
    );
}
