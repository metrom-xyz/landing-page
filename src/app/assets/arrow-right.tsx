import { SVGIconProps } from "@/types";

export function ArrowRightIcon(props: SVGIconProps) {
    return (
        <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M13.8281 5.68311L19.6452 11.5002L13.8281 17.3173"
                stroke="currentColor"
                strokeWidth="1.4375"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3.35547 11.5H19.4842"
                stroke="currentColor"
                strokeWidth="1.4375"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
