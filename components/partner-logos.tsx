const partners = [
  {
    src: "/partners/olof.png",
    alt: "Olof Schuur Installatiebedrijf",
    width: 768,
    height: 293,
  },
  {
    src: "/partners/luitjes.svg",
    alt: "Luitjes Elektrotechniek",
    width: 595,
    height: 242,
  },
  {
    src: "/partners/damen.svg",
    alt: "Damen Shiprepair",
    width: 595,
    height: 242,
  },
] as const;

export function PartnerLogos() {
  return (
    <footer className="mt-10 border-t border-white/10 pt-6 lg:mt-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <p className="shrink-0 text-sm font-medium text-white/80 sm:text-base">
          Deze bedrijven werken al met ons samen:
        </p>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-5">
          {partners.map((partner) => (
            <li key={partner.src}>
              {/* Partner marks are supplied SVGs and a transparent PNG. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className="h-10 w-auto sm:h-11"
              />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
