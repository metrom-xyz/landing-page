import Image from "next/image";
import goblinLogo from "./goblin.webp";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Goblin(props: any) {
    return (
        <svg
            width="94"
            height="28"
            viewBox="0 0 23 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M6.44527 5.80293C1.85158 10.33 1.85158 17.6695 6.44527 22.1965L12.3336 27.9995C12.3336 27.9995 13.1292 27.2051 14.1938 26.1345C18.4448 21.8616 17.4951 14.6864 12.3352 11.5321C15.3097 14.499 15.278 19.3207 12.3336 22.3166L9.68042 19.702C6.48462 16.5525 6.48462 11.447 9.68042 8.29752L12.3336 5.68283C12.3336 5.68283 14.655 7.98516 15.4212 8.7596C19.4635 12.8467 20.1274 17.7298 18.6536 21.7474C22.8101 17.1966 22.6664 10.183 18.2213 5.80239L12.3336 0"
                fill="#C2FF4F"
            />
        </svg>
    );
}
