import { ImageResponse } from "next/og";
import { MetromCompact } from "../assets/logos/metrom-compact";

export const size = {
    width: 32,
    height: 32,
};
export const contentType = "image/png";

export default function AppleIcon() {
    return new ImageResponse(<MetromCompact {...size} />, {
        ...size,
    });
}
