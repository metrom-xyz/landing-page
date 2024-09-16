import { SVGIconProps } from "@/types";

export function ChrevronDownIcon(props: SVGIconProps) {
    return (
        <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M1 1L5 5L9 1"
                stroke="#101827"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
