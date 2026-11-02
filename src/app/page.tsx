import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

// wireframe.png 구성: 원형 프로필 사진 → 이름 → 한 줄 소개 → 세로 링크 카드 3개
export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[26rem] flex-1 flex-col px-7 pt-20 pb-16 sm:px-6 sm:pt-28">
      <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />

      <nav aria-label="링크 목록" className="mt-12">
        <ul className="flex flex-col gap-4">
          {profile.links.map((link) => (
            <li key={link.id}>
              <LinkCard id={link.id} title={link.title} url={link.url} />
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
