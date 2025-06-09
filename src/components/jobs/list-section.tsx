import { Typography } from "@metrom-xyz/ui";

interface ListSectionProps {
    title: string;
    items: string[];
}

export function ListSection({ title, items }: ListSectionProps) {
    return (
        <div className="flex flex-col gap-2.5">
            <h2 className="text-xl2 leading-8 font-medium font-sans theme-text uppercase">
                {title}
            </h2>
            <ul className="list-disc ml-5">
                {items.map((item, index) => (
                    <li key={index}>
                        <Typography size="lg">{item}</Typography>
                    </li>
                ))}
            </ul>
        </div>
    );
}
