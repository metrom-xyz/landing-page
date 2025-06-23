import { Job } from "@/components/job";
import { getDictionary } from "../../../../dictionaries";
import { JOBS_OPENINGS } from "@/common/jobs";
import { notFound } from "next/navigation";
import { i18n } from "@/i18n-config";

export default async function JobPage({
    params,
}: {
    params: Promise<{ lang: string; id: string }>;
}) {
    const { lang, id } = await params;
    const dictionary = await getDictionary(lang);

    const job = JOBS_OPENINGS.find((job) => job.active && job.id === id);
    if (!job) notFound();

    return <Job dictionary={dictionary} {...job} />;
}

export async function generateStaticParams() {
    return i18n.locales.flatMap((locale) =>
        JOBS_OPENINGS.map((job) => ({ lang: locale, id: job.id })),
    );
}
