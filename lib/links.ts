import { safeHttpUrl } from "./launch";

const OPENING_ANCHOR = "#opening";

function publicHref(value: string | undefined) {
  const absolute = safeHttpUrl(value);
  if (absolute) return absolute;
  if (value && (value.startsWith("/") || value.startsWith("#"))) return value;
  return OPENING_ANCHOR;
}

export const employerHref = publicHref(process.env.NEXT_PUBLIC_EMPLOYER_URL);
export const candidateHref = publicHref(process.env.NEXT_PUBLIC_CANDIDATE_URL);

export function isOpeningAnchor(href: string) {
  return href === OPENING_ANCHOR;
}
