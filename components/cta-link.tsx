import Link from "next/link";
import { isOpeningAnchor } from "@/lib/links";

type CtaLinkProps = {
  href: string;
  tone: "sky" | "mint";
  children: string;
};

export function CtaLink({ href, tone, children }: CtaLinkProps) {
  const placeholder = isOpeningAnchor(href);
  const external = href.startsWith("http");
  const className = `flex min-h-28 w-full items-center rounded-[1.35rem] px-5 py-4 text-left text-base leading-snug font-extrabold text-navy transition hover:brightness-95 sm:w-[16.5rem] sm:text-[1.05rem] ${tone === "sky" ? "bg-sky" : "bg-mint"}`;
  const note = placeholder ? (
    <span className="sr-only"> Opent 26 november 2026 om 09:00 uur.</span>
  ) : null;

  if (external) {
    return (
      <a href={href} className={className} rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
      {note}
    </Link>
  );
}
