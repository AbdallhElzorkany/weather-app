import { format } from "date-fns";
import Image from "next/image";
type day = {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_c: number;
    mintemp_c: number;
    avghumidity: number;
    maxwind_kph: number;
    avgvis_km: number;
    avgtemp_c: number;
  };
};
export default async function Forecast({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
  const req = await fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=3`
  );
  const data = await req.json();
  return (
    <div className="container mx-auto mt-10 not-sm:px-10">
      <div>
        <h1 className="text-2xl font-semibold">
          Weather Forecast for {data.location.name}
        </h1>
        <p className="text-lg text-neutral-400 ">{data.location.country}</p>
      </div>
      <div className="grid grid-cols-1 gap-10   md:grid-cols-2 lg:grid-cols-3   border-b-4 border-t-4 py-10 my-10 border-neutral-700 text-lg text-neutral-400  px-10 bg-neutral-800 rounded-2xl shadow-2xl">
        {data.forecast.forecastday.map((day: day, index: number) => (
          <div
            className="flex flex-col gap-2 justify-center  bg-neutral-700 rounded-2xl p-5 border-b-4 border-neutral-900"
            key={index}
          >
            <Image
              width={100}
              height={100}
              src={`https:${day.day.condition.icon}`}
              alt="icon"
              className="size-25 self-center mb-3"
            />
            <h2 className="text-lg  font-semibold text-neutral-100">
              {format(new Date(day.date), "MMMM d, yyyy")}
            </h2>
            <p className="text-lg  text-neutral-100 ">
              {day.day.condition.text}
            </p>
            <p className="text-lg text-neutral-400 ">
              High: {day.day.maxtemp_c} C
            </p>
            <p className="text-lg text-neutral-400 ">
              Low: {day.day.mintemp_c} C
            </p>
            <p className="text-lg text-neutral-400 ">
              Avg Temp: {day.day.avgtemp_c} C
            </p>
            <p className="text-lg text-neutral-400 ">
              Humidity: {day.day.avghumidity}%
            </p>
            <p className="text-lg text-neutral-400 ">
              Wind Speed: {day.day.maxwind_kph} km/h
            </p>
            <p className="text-lg text-neutral-400 ">
              Visibility: {day.day.avgvis_km} km
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
