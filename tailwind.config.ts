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
        },
    },
    plugins: [],
};
export default config;
