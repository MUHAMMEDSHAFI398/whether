import Image from "next/image";

const Profile = () => {
  const formattedDate = new Date(Date.now()).toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="flex gap-3">
      <Image
        src="/profile.svg"
        alt="Next.js logo"
        width={40}
        height={40}
        priority
      />
      <div className="flex flex-col">
        <p className="text-sm">Hi, Farooque</p>
        <p className="text-lg">{formattedDate}</p>
      </div>
    </div>
  );
};

export default Profile;
