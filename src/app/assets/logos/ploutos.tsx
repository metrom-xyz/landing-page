import Image from "next/image";
import ploutosLogo from "./ploutos.webp";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Ploutos(props: any) {
    return <Image {...props} src={ploutosLogo} alt="Ploutos logo" />;
}
