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
      className="block w-full rounded-xl border-2 border-foreground/15 px-5 py-4 text-center font-medium transition hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-foreground/5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
    >
      {title}
    </a>
  );
}
