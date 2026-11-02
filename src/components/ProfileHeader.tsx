import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image?: string;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-foreground/10 bg-foreground/5 sm:h-32 sm:w-32">
        {image ? (
          <Image src={image} alt={`${name} 프로필 사진`} fill sizes="128px" className="object-cover" priority unoptimized={image.endsWith(".svg")} />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-4xl font-semibold text-foreground/60">
            {name.charAt(0)}
          </span>
        )}
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-widest">{name}</h1>
      <p className="mt-2 text-sm text-foreground/70">{bio}</p>
    </header>
  );
}
