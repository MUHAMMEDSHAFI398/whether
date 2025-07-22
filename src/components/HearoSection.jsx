import Image from "next/image";
import HeroItem from "./HeroItem";
import TimewiseTemeperature from "./TimewiseTemeperature";

const HearoSection = () => {
  return (
    <div className="mt-10 px-4">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="p-2 w-full md:w-2/3 bg-[#2E2E38] rounded-3xl">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-center">
              <Image
                src="/sun.svg"
                alt="Sun icon"
                width={123}
                height={86}
                priority
              />
              <div className="flex flex-wrap justify-between w-full gap-4 sm:gap-6">
                <HeroItem />
                <HeroItem />
                <HeroItem />
                <HeroItem />
              </div>
            </div>
            <div className="flex gap-3">
              <TimewiseTemeperature />
              <TimewiseTemeperature />
              <TimewiseTemeperature />
              <TimewiseTemeperature />
              <TimewiseTemeperature />
              <TimewiseTemeperature />
              <TimewiseTemeperature />
              <TimewiseTemeperature />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <Image
            src="/map.svg"
            alt="Map"
            width={551}
            height={281}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HearoSection;
