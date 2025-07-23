"use client";
import Image from "next/image";
import HeroItem from "./HeroItem";
import TimewiseTemeperature from "./TimewiseTemeperature";
import WeatherChart from "./WhetherChart";
import { useSelector } from "react-redux";

const HearoSection = () => {
  const { dummyResponse } = useSelector((state) => state.dummyResponse);

  return (
    <div className="mt-10 px-4">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="p-2 w-full md:w-1/2 bg-[#2E2E38] rounded-3xl">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-center">
              <Image
                src="/sun.svg"
                alt="Sun icon"
                width={123}
                height={86}
                priority
              />
              <div className="flex flex-wrap  w-full gap-4 sm:gap-6">
                <HeroItem
                  value={dummyResponse.city}
                  text={dummyResponse.country}
                />
                <HeroItem
                  value={dummyResponse.temperature}
                  text={"Temperature"}
                />
                <HeroItem value={dummyResponse.rainfall} text={"Rainfall"} />
                <HeroItem value={dummyResponse.windSpeed} text={"Wind speed"} />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {[...Array(28)].map((_, index) => (
                <TimewiseTemeperature key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <WeatherChart />
        </div>
      </div>
    </div>
  );
};

export default HearoSection;
