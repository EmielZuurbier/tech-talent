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
  { key: "days", singular: "dag", plural: "dagen", label: "Dagen" },
  { key: "hours", singular: "uur", plural: "uren", label: "Uren" },
  { key: "minutes", singular: "minuut", plural: "minuten", label: "Minuten" },
  { key: "seconds", singular: "seconde", plural: "seconden", label: "Seconden" },
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
    <section
      id="opening"
      aria-labelledby="opening-title"
      className="w-fit max-w-full shrink-0 scroll-mt-8"
    >
      <h2
        id="opening-title"
        className="w-0 min-w-full bg-white px-1.5 py-1 text-center text-xl leading-none font-black tracking-tight whitespace-nowrap text-black uppercase sm:px-2 sm:py-1 sm:text-[1.55rem]"
      >
        {parts?.complete ? "Geopend" : "Lancering"}
      </h2>

      {parts?.complete ? (
        <p className="mt-2 text-center text-sm font-medium text-white sm:text-base">
          Tech-talent.nu is geopend.
        </p>
      ) : (
        <ol className="mt-1.5 flex items-start justify-center" aria-hidden="true">
          {UNITS.map((unit, index) => {
            const value = parts ? parts[unit.key] : 0;
            return (
              <li key={unit.key} className="flex items-start">
                {index > 0 ? (
                  <span className="px-1.5 text-xl leading-none font-black text-white sm:px-2.5 sm:text-2xl">
                    :
                  </span>
                ) : null}
                <span className="flex flex-col items-center">
                  <span
                    className={`text-xl leading-none font-black tabular-nums text-white sm:text-2xl ${parts ? "" : "text-transparent"}`}
                  >
                    {pad(value)}
                  </span>
                  <span className="mt-1 text-[0.58rem] leading-none text-white/55 sm:text-[0.62rem]">
                    {unit.label}
                  </span>
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
