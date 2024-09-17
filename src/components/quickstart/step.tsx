import { Typography } from "@metrom-xyz/ui";

interface StepProps {
    number: number;
    title: string;
    description: string;
}

export function Step({ number, title, description }: StepProps) {
    return (
        <div className="w-full h-full flex flex-col gap-4 p-3 bg-gray-100 rounded-2xl">
            <div className="flex items-center gap-5">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white">
                    <Typography weight="medium" className="text-xl2">
                        {number}.
                    </Typography>
                </div>
                <Typography variant="xl" className="font-semibold">
                    {title}
                </Typography>
            </div>
            <Typography
                weight="medium"
                variant="lg"
                className="leading-normal text-gray-600"
            >
                {description}
            </Typography>
        </div>
    );
}
