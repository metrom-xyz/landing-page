import Image from "next/image";
import ichiLogo from "./ichi.webp";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Ichi(props: any) {
    return <Image {...props} src={ichiLogo} alt="Ichi logo" />;
}
