import {CloudSunRain } from "lucide-react";
import Link from "next/link";

export const Header = () => {
    return (
      <header className="flex items-center not-sm:justify-center gap-4 border-neutral-700 border-b py-5 px-10">
        <CloudSunRain className="size-8" />
        <Link href="/" className="text-xl font-bold">Weather App</Link>
      </header>
    );
};