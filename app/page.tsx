import Link from "next/link";
import { Countdown } from "@/components/countdown";
import { PartnerLogos } from "@/components/partner-logos";
import { PhotoCluster } from "@/components/photo-cluster";

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
    <div className="mx-auto flex h-dvh w-full max-w-[1440px] flex-col overflow-x-clip px-5 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-8 sm:py-5 lg:px-12 lg:py-6">
      <a
        href="#inhoud"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-navy"
      >
        Naar de inhoud
      </a>

      <header className="shrink-0">
        <Link href="/" className="inline-flex">
          {/* The wordmark is an SVG; the image optimizer does not process it. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Tech-talent.nu"
            width={3732}
            height={808}
            className="h-[1.375rem] w-auto min-[360px]:h-[1.546875rem] sm:h-[1.71875rem] lg:h-[2.40625rem]"
          />
        </Link>
      </header>

      <main id="inhoud" className="mt-8 flex min-h-0 flex-1 flex-col sm:mt-5 lg:mt-6">
        <div className="flex min-h-0 flex-1 flex-col gap-4 max-sm:justify-between lg:grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:grid-rows-[minmax(0,1fr)] lg:gap-x-10">
          <div className="max-w-xl shrink-0 lg:max-w-none lg:self-center">
            <h1 className="text-4xl leading-[1.08] font-bold tracking-tight text-mint sm:text-5xl lg:text-[3.15rem]">
              Welkom bij <span className="whitespace-nowrap">Tech-talent</span>
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed font-medium text-white sm:text-xl lg:mt-5">
              {description}
            </p>
            <div className="mt-6 lg:mt-8">
              <Countdown />
            </div>
          </div>

          <div className="min-h-0 flex-1 max-sm:max-h-[17.5rem] max-sm:overflow-hidden lg:h-full">
            <PhotoCluster />
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
