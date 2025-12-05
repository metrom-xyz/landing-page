import Image from "next/image";
import honeypopLogo from "./honeypop.webp";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Honeypop(props: any) {
    return (
        <Image
            {...props}
            src={honeypopLogo}
            alt="Honeypop logo"
            className="rounded-full"
        />
    );
}
