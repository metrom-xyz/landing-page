import { getDictionary } from "../../../dictionaries";
import { Jobs } from "@/components/jobs";

export default async function JobsPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return (
        <div className="w-full flex items-center flex-col gap-20 md:gap-[4.75rem]">
            <div className="flex md:flex-1 flex-col items-center gap-[4.75rem] w-full max-w-screen-lg">
                <Jobs dictionary={dictionary.jobs} />
            </div>
        </div>
    );
}
