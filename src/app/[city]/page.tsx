import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";
export default async function City({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
  const req = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`);
  const data = await req.json();
  return (
    <div className="container mx-auto mt-10 not-sm:px-10">
      <div className="flex justify-between gap-2 items-center not-sm:flex-col not-sm:justify-center">
        <div className="flex flex-col  gap-2 not-sm:items-center not-sm:justify-center">
          <Image
            width={100}
            height={100}
            src={`https:${data.current.condition.icon}`}
            alt="icon"
            className="object-cover"
          />
          <h1 className="pl-5 not-sm:pl-0 text-4xl font-semibold">{data.location.name}</h1>
          <p className="pl-5 not-sm:pl-0 text-lg text-neutral-400 ">{data.location.country}</p>
          <p className="pl-5 not-sm:pl-0 text-lg text-neutral-400">
            {format(new Date(data.location.localtime), "MMMM d, yyyy HH:mm")}
          </p>
          <p className="pl-5 not-sm:pl-0 text-4xl font-semibold">{data.current.temp_c} C</p>
          <p className="pl-5 not-sm:pl-0 text-lg text-neutral-400">
            {data.current.condition.text}
          </p>
        </div>
        <Link href={`/forecast/${city}`} className="text-xl pr-5 not-sm:pr-0 font-bold flex gap-2 items-center hover:underline hover:text-neutral-400 transition-all duration-150">
          Forecast <SquareArrowOutUpRight />
        </Link>
      </div>

      <div className="flex justify-around border-b-4 border-t-4 py-10 my-10 border-neutral-700 text-lg text-neutral-400  sm:items-center not-sm:px-10 not-sm:flex-col bg-neutral-800 rounded-2xl shadow-2xl">
        <div className="flex flex-col gap-5">
          <p>Humidity: {data.current.humidity}%</p>
          <p>Wind Speed: {data.current.wind_kph} km/h</p>
          <p>Wind Direction: {data.current.wind_dir}</p>
          <p>Wind Chill: {data.current.windchill_c} C</p>
          <p>Wind Gust: {data.current.gust_kph} km/h</p>
          <p>Feels Like: {data.current.feelslike_c} C</p>
        </div>
        <div className="flex flex-col gap-5 not-sm:mt-5">
          <p>Pressure: {data.current.pressure_mb} mb</p>
          <p>Precipitation: {data.current.precip_mm} mm</p>
          <p>Cloud: {data.current.cloud}%</p>
          <p>UV Index: {data.current.uv}</p>
          <p>Visibility: {data.current.vis_km} km</p>
          <p>Heat Index: {data.current.heatindex_c} C</p>
        </div>
      </div>
    </div>
  );
}
