const partners = [
  {
    src: "/partners/olof.png",
    alt: "Olof Schuur Installatiebedrijf",
    href: "https://olofschuur.nl",
    width: 768,
    height: 293,
  },
  {
    src: "/partners/luitjes.svg",
    alt: "Luitjes Elektrotechniek",
    href: "https://www.luitjes.com",
    width: 595,
    height: 242,
  },
  {
    src: "/partners/damen.svg",
    alt: "Damen Shiprepair",
    href: "https://www.damen.com/companies/shiprepair/damen-shipyards-den-helder",
    width: 595,
    height: 242,
  },
] as const;

export function PartnerLogos() {
  return (
    <footer className="mt-4 shrink-0 border-t border-white/10 pt-4 lg:mt-5 lg:pt-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <p className="shrink-0 text-sm font-medium text-white/80 sm:text-base">
          Deze bedrijven werken al met ons samen:
        </p>
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-3 sm:gap-x-8 sm:gap-y-5">
          {partners.map((partner) => (
            <li key={partner.src}>
              <a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-sm"
              >
                {/* Partner marks are supplied SVGs and a transparent PNG. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                  className="h-9 w-auto sm:h-11"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
