import { Typography } from "@metrom-xyz/ui";

interface ListSectionProps {
    title: string;
    description: string;
}

export function Section({ title, description }: ListSectionProps) {
    return (
        <div className="flex flex-col gap-2.5">
            <h2 className="text-xl2 leading-8 font-medium font-sans theme-text uppercase">
                {title}
            </h2>
            <Typography size="lg">{description}</Typography>
        </div>
    );
}
