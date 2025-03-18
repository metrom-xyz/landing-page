import Image from "next/image";
import swapsicleLogo from "./swapsicle.webp";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Swapsicle(props: any) {
    return <Image {...props} src={swapsicleLogo} alt="Swapsicle logo" />;
}
