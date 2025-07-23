import HearoSection from "@/components/HearoSection";
import Profile from "@/components/profile";
import Searchinput from "@/components/searchinput";

export default function Home() {
  return (
    <div className="bg-[#1D1E23] h-screen px-5 py-3">
      <div className="flex gap-5">
        <Profile />
        <Searchinput />
      </div>
      <HearoSection />
    </div>
  
  );
}
