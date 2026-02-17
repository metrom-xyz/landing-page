import Image from "next/image";
import steerLogo from "./steer.webp";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Steer(props: any) {
    return (
        <Image
            {...props}
            src={steerLogo}
            alt="Steer logo"
            style={{ borderRadius: "100%" }}
        />
    );
}
