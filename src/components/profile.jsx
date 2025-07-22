import Image from "next/image";

const Profile = () => {
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
        <p className="text-lg">Sat, 11 May, 2024</p>
      </div>
    </div>
  );
};

export default Profile;
