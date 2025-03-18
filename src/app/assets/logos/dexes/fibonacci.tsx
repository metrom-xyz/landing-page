import Image from "next/image";
import fibonacciLogo from "./fibonacci.webp";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Fibonacci(props: any) {
    return <Image {...props} src={fibonacciLogo} alt="Fibonacci logo" />;
}
