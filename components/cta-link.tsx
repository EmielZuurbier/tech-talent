type CtaLinkProps = {
  href: string;
  audience: string;
  label: string;
  tone: "solid" | "outline";
};

export function CtaLink({ href, audience, label, tone }: CtaLinkProps) {
  return (
    <a
      href={href}
      aria-describedby="talent-share-note"
      className={`group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-0.5 rounded-2xl border-2 px-4 py-2.5 text-left transition-colors ${tone === "solid" ? "border-mint bg-mint text-navy hover:border-[#89cea7] hover:bg-[#89cea7]" : "border-mint/70 text-white hover:border-mint hover:bg-white/5"}`}
    >
      <span className={`col-span-2 text-xs leading-relaxed font-medium ${tone === "solid" ? "text-navy/80" : "text-white/75"}`}>
        {audience}
      </span>
      <span className="text-base leading-snug font-bold">
        {label}
      </span>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5 shrink-0 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
      >
        <path d="M5 12h14m-6-6 6 6-6 6" />
      </svg>
    </a>
  );
}
