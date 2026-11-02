import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image?: string;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      {/* 바깥 링 + 이중 그림자로 살짝 떠 있는 입체감 */}
      <div className="rounded-full bg-linear-to-b from-white to-white/40 p-1.5 shadow-[0_18px_40px_-16px_rgba(140,80,50,0.45),0_2px_6px_rgba(140,80,50,0.08)]">
        <div className="relative h-28 w-28 overflow-hidden rounded-full bg-[#f3e6dc] shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)] sm:h-32 sm:w-32">
          {image ? (
            <Image src={image} alt={`${name} 프로필 사진`} fill sizes="128px" className="object-cover" priority unoptimized={image.endsWith(".svg")} />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-4xl font-semibold text-muted">
              {name.charAt(0)}
            </span>
          )}
        </div>
      </div>
      <h1 className="mt-7 text-[1.625rem] font-bold tracking-tight">{name}</h1>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{bio}</p>
    </header>
  );
}
