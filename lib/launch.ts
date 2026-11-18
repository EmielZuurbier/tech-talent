/**
 * Opening moment of tech-talent.nu.
 * 26 November 2026, 09:00 Europe/Amsterdam (CET, UTC+1).
 * DST in the Netherlands ends on the last Sunday of October, so this instant is 08:00 UTC.
 */
export const LAUNCH_AT_ISO = "2026-11-26T08:00:00.000Z";
export const LAUNCH_AT = Date.parse(LAUNCH_AT_ISO);
export const LAUNCH_LABEL = "26 november 2026, 09:00 uur";
export const PREVIEW_PARAM = "landing";
export const PREVIEW_COOKIE = "tt_preview";

export type RedirectDecision =
  | { action: "next" }
  | { action: "redirect"; url: string };

export function safeHttpUrl(value: string | undefined | null): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  if (!trimmed) return null;

  try {
    const url = new URL(trimmed);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    return url.toString();
  } catch {
    return null;
  }
}

export function decideRedirect(options: {
  now: number;
  redirectUrl: string | undefined | null;
  preview: boolean;
  currentHost?: string | null;
}): RedirectDecision {
  if (options.preview || options.now < LAUNCH_AT) {
    return { action: "next" };
  }

  const url = safeHttpUrl(options.redirectUrl);
  if (!url) return { action: "next" };

  if (options.currentHost && new URL(url).host === options.currentHost) {
    return { action: "next" };
  }

  return { action: "redirect", url };
}

export function remainingParts(now: number, target = LAUNCH_AT) {
  const milliseconds = Math.max(0, target - now);
  const totalSeconds = Math.floor(milliseconds / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    complete: milliseconds === 0,
  };
}

export function pad(value: number) {
  return String(Math.max(0, value)).padStart(2, "0");
}

export function unitWord(value: number, singular: string, plural: string) {
  return Math.abs(value) === 1 ? singular : plural;
}
