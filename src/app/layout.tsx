import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "링크나무",
  description: "내 모든 링크를 한 페이지에 모아 하나의 URL로 공유하세요",
};

export const viewport: Viewport = {
  themeColor: "#fff8ef",
};

// Pretendard: 한글 지원 둥근 산세리프. 실제로 쓰인 글자만 내려받는 dynamic-subset 버전입니다.
const PRETENDARD_CSS =
  "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href={PRETENDARD_CSS} crossOrigin="anonymous" />
      </head>
      <body className="relative flex min-h-full flex-col overflow-x-hidden">
        <div aria-hidden className="ambient-blob -top-24 -left-24 h-80 w-80 bg-[#ffd9bf]/70" />
        <div aria-hidden className="ambient-blob top-1/3 -right-28 h-96 w-96 bg-[#ffc9b0]/50" />
        <div aria-hidden className="ambient-blob -bottom-32 left-1/4 h-80 w-80 bg-[#fff1d6]/80" />
        {children}
      </body>
    </html>
  );
}
