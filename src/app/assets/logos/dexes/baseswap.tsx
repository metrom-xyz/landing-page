import Image from "next/image";
import baseSwapLogo from "./baseswap.webp";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function BaseSwap(props: any) {
    return <Image {...props} src={baseSwapLogo} alt="BaseSwap logo" />;
}
