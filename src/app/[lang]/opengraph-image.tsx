import { ImageResponse } from "next/og";
import { SocialPreview } from "../assets/social-preview";

export const alt = "Metrom";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(<SocialPreview {...size} />, {
        ...size,
    });
}
