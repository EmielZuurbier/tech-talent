"use client";

import { useEffect, useState } from "react";
import {
  LAUNCH_AT,
  LAUNCH_LABEL,
  pad,
  remainingParts,
  unitWord,
} from "@/lib/launch";

const UNITS = [
  { key: "days", singular: "dag", plural: "dagen" },
  { key: "hours", singular: "uur", plural: "uren" },
  { key: "minutes", singular: "minuut", plural: "minuten" },
  { key: "seconds", singular: "seconde", plural: "seconden" },
] as const;

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (now === null || now < LAUNCH_AT) return;
    if (sessionStorage.getItem("tt-launch-checked") === "1") return;
    sessionStorage.setItem("tt-launch-checked", "1");
    window.location.reload();
  }, [now]);

  const parts = now === null ? null : remainingParts(now);
  const spoken = !parts
    ? `Aftellen tot de opening op ${LAUNCH_LABEL}, Nederlandse tijd.`
    : parts.complete
      ? `Tech-talent.nu is geopend sinds ${LAUNCH_LABEL}, Nederlandse tijd.`
      : `Nog ${parts.days} ${unitWord(parts.days, "dag", "dagen")}, ${parts.hours} ${unitWord(parts.hours, "uur", "uren")} en ${parts.minutes} ${unitWord(parts.minutes, "minuut", "minuten")} tot ${LAUNCH_LABEL}, Nederlandse tijd.`;

  return (
    <section id="opening" aria-labelledby="opening-title" className="scroll-mt-8">
      <h2 id="opening-title" className="text-sm font-medium tracking-[0.16em] text-mint uppercase">
        {parts?.complete ? "Geopend" : "Livegang"}
      </h2>
      <p className="mt-1 text-sm text-white/75">
        <time dateTime="2026-11-26T09:00:00+01:00">{LAUNCH_LABEL}</time>
        <span className="text-white/50"> · Nederlandse tijd</span>
      </p>

      {parts?.complete ? (
        <p className="mt-4 max-w-md text-2xl font-extrabold tracking-tight text-white">
          Tech-talent.nu is geopend.
        </p>
      ) : (
        <ol className="mt-4 flex gap-5 sm:gap-7" aria-hidden="true">
          {UNITS.map((unit) => {
            const value = parts ? parts[unit.key] : 0;
            return (
              <li key={unit.key} className="min-w-[3.6rem]">
                <span
                  className={`block text-4xl font-light tabular-nums tracking-tight sm:text-5xl ${parts ? "text-white" : "text-transparent"}`}
                >
                  {pad(value)}
                </span>
                <span className="mt-1 block text-sm font-medium text-mint">
                  {unitWord(value, unit.singular, unit.plural)}
                </span>
              </li>
            );
          })}
        </ol>
      )}

      <p className="sr-only" aria-live="polite">
        {spoken}
      </p>
    </section>
  );
}
