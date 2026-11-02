export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  /** public/ 아래 이미지 경로. 비워 두면 이름 첫 글자로 대체됩니다. */
  image?: string;
  links: LinkItem[];
};

// TODO: 보여주기용 더미 값입니다. 실제 내용으로 교체하세요.
export const profile: Profile = {
  name: "최재원",
  bio: "세계 최강 바이브 코더",
  image: "/profile-placeholder.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
    { id: "blog", title: "Blog", url: "https://example.com" },
  ],
};
