import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  LAUNCH_AT,
  decideRedirect,
  remainingParts,
  safeHttpUrl,
  unitWord,
} from "./launch.ts";

describe("launch instant", () => {
  it("is 26 november 2026 at 09:00 in Amsterdam", () => {
    const formatted = new Intl.DateTimeFormat("nl-NL", {
      timeZone: "Europe/Amsterdam",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    }).format(new Date(LAUNCH_AT));

    assert.match(formatted, /26/);
    assert.match(formatted, /november/i);
    assert.match(formatted, /2026/);
    assert.match(formatted, /09:00/);
  });
});

describe("decideRedirect", () => {
  const target = "https://platform.tech-talent.nu/";

  it("keeps the landing page before the opening", () => {
    assert.deepEqual(
      decideRedirect({
        now: LAUNCH_AT - 1,
        redirectUrl: target,
        preview: false,
        currentHost: "tech-talent.nu",
      }),
      { action: "next" },
    );
  });

  it("redirects once the opening moment has passed", () => {
    assert.deepEqual(
      decideRedirect({
        now: LAUNCH_AT,
        redirectUrl: target,
        preview: false,
        currentHost: "tech-talent.nu",
      }),
      { action: "redirect", url: target },
    );
  });

  it("stays on the landing page when no destination is configured", () => {
    assert.deepEqual(
      decideRedirect({
        now: LAUNCH_AT + 60_000,
        redirectUrl: "   ",
        preview: false,
      }),
      { action: "next" },
    );
  });

  it("lets a preview bypass the redirect", () => {
    assert.deepEqual(
      decideRedirect({
        now: LAUNCH_AT + 60_000,
        redirectUrl: target,
        preview: true,
        currentHost: "tech-talent.nu",
      }),
      { action: "next" },
    );
  });

  it("does not redirect to the same host", () => {
    assert.deepEqual(
      decideRedirect({
        now: LAUNCH_AT,
        redirectUrl: "https://tech-talent.nu/app",
        preview: false,
        currentHost: "tech-talent.nu",
      }),
      { action: "next" },
    );
  });

  it("rejects non-http destinations", () => {
    assert.equal(safeHttpUrl("javascript:alert(1)"), null);
    assert.deepEqual(
      decideRedirect({
        now: LAUNCH_AT,
        redirectUrl: "javascript:alert(1)",
        preview: false,
      }),
      { action: "next" },
    );
  });
});

describe("remainingParts", () => {
  it("splits a duration into days, hours, minutes and seconds", () => {
    const now = LAUNCH_AT - ((2 * 86400 + 3 * 3600 + 4 * 60 + 5) * 1000);
    assert.deepEqual(remainingParts(now), {
      days: 2,
      hours: 3,
      minutes: 4,
      seconds: 5,
      complete: false,
    });
  });

  it("is complete at the opening moment", () => {
    assert.equal(remainingParts(LAUNCH_AT).complete, true);
    assert.equal(remainingParts(LAUNCH_AT + 5000).days, 0);
  });
});

describe("unitWord", () => {
  it("uses singular for one", () => {
    assert.equal(unitWord(1, "dag", "dagen"), "dag");
    assert.equal(unitWord(2, "uur", "uren"), "uren");
  });
});
