import Link from "next/link";
import { Countdown } from "@/components/countdown";
import { CtaLink } from "@/components/cta-link";
import { PartnerLogos } from "@/components/partner-logos";
import { PhotoCluster } from "@/components/photo-cluster";
import { candidateHref, employerHref } from "@/lib/links";

const description =
  "Dé plek voor de Kop van Noord-Holland en omstreken waar uitdagende vacatures en ambitieuze tech-professionals elkaar treffen.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Tech-talent.nu",
  url: "https://tech-talent.nu",
  description,
  inLanguage: "nl-NL",
};

export default function Home() {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[1440px] flex-col overflow-x-clip px-5 py-6 sm:px-8 lg:px-12 lg:py-8">
      <a
        href="#inhoud"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-navy"
      >
        Naar de inhoud
      </a>

      <header>
        <Link href="/" className="inline-flex">
          {/* The wordmark is an SVG; the image optimizer does not process it. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Tech-talent.nu"
            width={3732}
            height={808}
            className="h-12 w-auto sm:h-14 lg:h-16"
          />
        </Link>
      </header>

      <main id="inhoud" className="mt-8 flex flex-1 flex-col lg:mt-10">
        <div className="grid flex-1 items-center gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-x-8 lg:gap-y-6">
          <div className="max-w-xl lg:max-w-none">
            <h1 className="text-4xl leading-[1.05] font-extrabold tracking-tight text-mint sm:text-5xl lg:text-[3.35rem]">
              Welkom bij Tech-talent
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white sm:text-xl">
              {description}
            </p>
          </div>

          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <PhotoCluster />
          </div>

          <div className="flex max-w-2xl flex-col gap-8">
            <Countdown />
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <CtaLink href={employerHref} tone="sky">
                Zoek je talent? Registreer je hier voor een werkgeversticket.
              </CtaLink>
              <CtaLink href={candidateHref} tone="mint">
                Sta je open voor een uitdaging? Klik hier. Je hebt vrij toegang.
              </CtaLink>
            </div>
          </div>
        </div>

        <PartnerLogos />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
