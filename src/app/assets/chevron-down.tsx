import { SVGIconProps } from "@/types";

export function ChrevronDown(props: SVGIconProps) {
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
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
}
