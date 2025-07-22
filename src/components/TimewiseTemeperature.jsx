import Image from "next/image";

const TimewiseTemeperature = () => {
  return (
    <div className="bg-[#CBE7EA] rounded-lg flex flex-col gap-1 items-center w-fit text-black text-sm p-2">
      <span>08 am</span>
      <Image
        src="/rainsnow.svg"
        alt="Sun icon"
        width={29}
        height={26}
        priority
      />
      <span>17°C</span>
    </div>
  );
};

export default TimewiseTemeperature;
