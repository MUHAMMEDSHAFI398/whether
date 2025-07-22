import Image from "next/image";

const Searchinput = () => {
  return (
    <div>
      <div className="relative">
        <input className="bg-[#2D3037] h-9 rounded-xl pl-10"></input>
        <Image
          style={{ left: "10px", top: "10px" }}
          className="absolute"
          src="/search.svg"
          alt="Next.js logo"
          width={20}
          height={20}
          priority
        />
      </div>
    </div>
  );
};

export default Searchinput;
