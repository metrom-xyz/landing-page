import Image from "next/image";
import ink from "./ink.webp";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Ink(props: any) {
    return <Image {...props} src={ink} alt="Ink logo" />;
}
