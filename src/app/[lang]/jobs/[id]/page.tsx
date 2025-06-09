import { Job } from "@/components/jobs/job";
import { getDictionary } from "../../../../dictionaries";
import { JOBS_OPENINGS } from "@/common/jobs";
import { notFound } from "next/navigation";

export default async function JobPage({
    params,
}: {
    params: Promise<{ lang: string; id: string }>;
}) {
    const { lang, id } = await params;
    const dictionary = await getDictionary(lang);

    const job = JOBS_OPENINGS.find((job) => job.active && job.id === id);
    if (!job) notFound();

    return (
        <div className="w-full flex items-center flex-col gap-20 md:gap-[4.75rem]">
            <div className="flex md:flex-1 flex-col items-center gap-[4.75rem] w-full max-w-screen-lg">
                <Job {...job} dictionary={dictionary.job} />
            </div>
        </div>
    );
}
