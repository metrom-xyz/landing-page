import { tailwindPreset } from "@metrom-xyz/ui";
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    presets: [tailwindPreset],
    theme: {
        extend: {
            borderRadius: {
                "4xl": "1.875rem",
            },
            backgroundImage: {
                article1: "url('/article-graphic01.svg')",
                article2: "url('/article-graphic02.svg')",
                article3: "url('/article-graphic03.svg')",
            },
        },
    },
    plugins: [],
};
export default config;
