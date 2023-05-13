import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="rounded-full bg-gradient-to-tl from-purple-700/60 to-rose-400/60 shadow-lg ring-[5px] ring-purple-500/10 p-[3px]">
      <div className="rounded-full p-px h-[64px] w-[64px]">
        <Image
          src="https://github.com/d6stiny.png"
          alt="github profile image"
          quality={95}
          priority={true}
          className="rounded-full"
          width={64}
          height={64}
        />
      </div>
    </div>
  );
}
