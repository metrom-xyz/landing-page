import { MoonIcon } from "@/app/assets/moon-icon";
import { SunIcon } from "@/app/assets/sun-icon";
import { Theme } from "@/types";
import { Button } from "@metrom-xyz/ui";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

export function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme: theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleThemeOnChange = useCallback(() => {
        const html = document.documentElement;
        html.classList.add("no-transition");

        setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);

        requestAnimationFrame(() => {
            setTimeout(() => {
                html.classList.remove("no-transition");
            }, 1);
        });
    }, [theme, setTheme]);

    if (!mounted) return;

    return (
        <Button
            onClick={handleThemeOnChange}
            size="sm"
            icon={theme === Theme.Dark ? MoonIcon : SunIcon}
            className={{ root: "w-9! h-9! p-0! hidden! md:flex!" }}
        />
    );
}
