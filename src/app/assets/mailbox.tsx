import { SVGIconProps } from "@/types";

export function MailboxIcon(props: SVGIconProps) {
    return (
        <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M4.375 7.5C1.875 7.5 1.875 8.61875 1.875 10V10.625C1.875 12.35 1.875 13.75 5 13.75H10C12.5 13.75 13.125 12.35 13.125 10.625V10C13.125 8.61875 13.125 7.5 10.625 7.5C10 7.5 9.825 7.63125 9.5 7.875L8.8625 8.55C8.125 9.3375 6.875 9.3375 6.13125 8.55L5.5 7.875C5.175 7.63125 5 7.5 4.375 7.5Z"
                stroke="currentColor"
                strokeWidth="0.9375"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.875 7.5V3.75C11.875 2.36875 11.875 1.25 9.375 1.25H5.625C3.125 1.25 3.125 2.36875 3.125 3.75V7.5"
                stroke="currentColor"
                strokeWidth="0.9375"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.59375 5.76855H8.675"
                stroke="currentColor"
                strokeWidth="0.9375"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.07422 3.89355H9.19922"
                stroke="currentColor"
                strokeWidth="0.9375"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
