"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, CircleX } from "lucide-react";
type City = {
  name: string;
  country: string;
};
export default function Home() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
  const [search, setSearch] = useState("");
  const [city, setCity] = useState<City[]>([]);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    const fetchCities = async function () {
      if (search) {
        setError("");
        setCity([]);
        try {
          const req = await fetch(
            `${BASE_URL}/search.json?q=${search}&key=${API_KEY}`
          );
          if (!req.ok) {
            throw new Error("Failed to fetch cities");
          }
          const res = await req.json();
          if (res.length === 0) {
            setError("No Cities Found");
          }
          setCity(res);
        } catch (error) {
          if (error instanceof Error) {
            setError(error.message);
          } else {
            setError("Something went wrong");
          }
        }
      }
    };
    fetchCities();
  }, [search, API_KEY, BASE_URL]);
  return (
    <div className="container mx-auto mt-10 not-sm:px-10">
      <div className="flex items-center justify-between gap-4 bg-neutral-700 rounded-md px-2 py-1">
        <Search className="ml-2 size-6 text-neutral-400 cursor-pointer" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent rounded-md py-3 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <CircleX
          className="mr-2 size-6 text-neutral-400 cursor-pointer"
          onClick={() => {
            setSearch("");
            setCity([]);
          }}
        />
      </div>
      <div className="flex flex-wrap gap-4 mt-10">
        {error ? (
          <p className="text-neutral-400 text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {error}
          </p>
        ) : (
          city.map((city) => (
            <Link
              key={city.name}
              href={`/${city.name}`}
              className="bg-neutral-700 rounded-md px-6 py-3"
            >
              <div className="text-center text-xl font-semibold">
                {city.name}
              </div>
              <div className="text-center text-md text-neutral-400">
                {city.country}
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
