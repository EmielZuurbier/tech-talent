import Image from "next/image";

const partners = [
  {
    src: "/partners/olof.png",
    alt: "Olof Schuur Installatiebedrijf",
    width: 356,
    height: 146,
  },
  {
    src: "/partners/luitjes.png",
    alt: "Luitjes Elektrotechniek",
    width: 438,
    height: 123,
  },
  {
    src: "/partners/damen.png",
    alt: "Damen Shiprepair",
    width: 354,
    height: 135,
  },
] as const;

export function PartnerLogos() {
  return (
    <footer className="mt-10 border-t border-white/10 pt-6 lg:mt-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <p className="shrink-0 text-sm text-white/80 sm:text-base">
          Deze bedrijven werken al met ons samen:
        </p>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-5">
          {partners.map((partner) => (
            <li key={partner.src}>
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                style={{ height: 46, width: "auto" }}
              />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
