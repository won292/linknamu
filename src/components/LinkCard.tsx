"use client";

type Props = {
  id: string;
  title: string;
  url: string;
};

function recordClick(id: string) {
  const body = JSON.stringify({ id });
  // sendBeacon은 새 탭으로 이동해도 요청이 끊기지 않습니다.
  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/clicks", new Blob([body], { type: "application/json" }));
  } else {
    fetch("/api/clicks", { method: "POST", body, keepalive: true }).catch(() => {});
  }
}

export default function LinkCard({ id, title, url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => recordClick(id)}
      className="group relative flex w-full items-center justify-center rounded-2xl border border-white/70 bg-white/45 px-12 py-[1.125rem] text-[0.9375rem] font-semibold tracking-tight shadow-[0_8px_24px_-12px_rgba(140,80,50,0.25),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/60 hover:shadow-[0_12px_28px_-12px_rgba(140,80,50,0.32),inset_0_1px_0_rgba(255,255,255,0.9)] active:translate-y-0 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/60 motion-reduce:transition-none"
    >
      {title}
      <svg
        aria-hidden
        viewBox="0 0 16 16"
        className="absolute right-5 h-3.5 w-3.5 text-muted opacity-0 transition duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 11 11 5M6 5h5v5" />
      </svg>
    </a>
  );
}
