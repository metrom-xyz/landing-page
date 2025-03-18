import Image from "next/image";
import curveLogo from "./curve.webp";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Curve(props: any) {
    return <Image {...props} src={curveLogo} alt="Curve logo" />;
}
