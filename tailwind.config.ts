import type { Config } from "tailwindcss";

const SANS_FONT_FAMILY = ["IBM Plex Sans", "ui-sans-serif", "sans-serif"];
const MONO_FONT_FAMILY = ["IBM Plex Mono", "ui-monospace", "monospace"];

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: SANS_FONT_FAMILY,
                mono: MONO_FONT_FAMILY,
            },
            colors: {
                "brand-green": "#6CFF95",
                "brand-blue": "#3C82F6",
                black: "#000000",
                white: "#FFFFFF",
            },
            borderRadius: {
                "4xl": "1.875rem",
            },
        },
    },
    plugins: [],
};
export default config;
