import type { JSX } from "react";

export const interpolate = (
    text: string,
    values: { [key: string]: JSX.Element },
) => {
    return text.split(/({{.*?}})/g).map((part) => {
        const key = part.match(/{{(.*?)}}/)?.[1];
        return key && values[key] ? values[key] : part;
    });
};
