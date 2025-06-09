import Link from "next/link";

// TODO: improve, add illustration
export default async function NotFound() {
    return (
        <div className="w-full flex flex-col items-center justify-items-center gap-10">
            <h1 className="font-sans leading-10 text-4xl theme-text font-semibold text-center uppercase">
                Not found
            </h1>
            <h2 className="text-xl2 leading-8 font-medium font-sans theme-text">
                {"The page you're looking for doesn't exist."}
            </h2>
            <Link
                href="/"
                className="px-5 py-3 rounded-xl text-white dark:text-black bg-black dark:bg-zinc-200 hover:bg-zinc-800 dark:hover:bg-zinc-300 transition-colors duration-200"
            >
                Go back
            </Link>
        </div>
    );
}
