import Image from "next/image";

export function PhotoCluster() {
  return (
    <div className="relative mx-auto h-[26rem] w-full max-w-[38rem] sm:h-[32rem] lg:h-[34rem] lg:max-w-none">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[6%_0_8%_8%] opacity-80"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(100,200,135,0.38) 1px, transparent 1px), linear-gradient(to bottom, rgba(100,200,135,0.38) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <figure className="absolute top-[2%] right-0 z-10 h-[80%] w-[68%] overflow-hidden rounded-[1.6rem] border-[3px] border-white/90 shadow-[0_24px_50px_rgba(0,0,0,0.28)]">
        <Image
          src="/photos/monteur-scheepsbouw.jpg"
          alt="Monteur met groene helm werkt aan een blauwe scheepsconstructie"
          width={1443}
          height={2164}
          priority
          sizes="(min-width: 1024px) 34vw, 70vw"
          className="h-full w-full object-cover object-[center_28%]"
        />
      </figure>

      <figure className="absolute top-[16%] left-0 z-20 h-[64%] w-[52%] overflow-hidden rounded-[1.6rem] border-[3px] border-white shadow-[0_24px_50px_rgba(0,0,0,0.32)]">
        <Image
          src="/photos/technicus-productie.jpg"
          alt="Technicus met veiligheidsbril bedient een machine in een productiehal"
          width={1000}
          height={1500}
          priority
          sizes="(min-width: 1024px) 24vw, 55vw"
          className="h-full w-full object-cover object-[center_22%]"
        />
      </figure>

      <svg
        aria-hidden="true"
        viewBox="0 0 1000 1000"
        className="pointer-events-none absolute inset-0 z-30 h-full w-full"
      >
        <path
          d="M500 790 H900 V910 H210"
          stroke="#66c98a"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M900 910 H990"
          stroke="#4bb4e9"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="500" cy="790" r="11" fill="#ffffff" />
        <circle cx="210" cy="910" r="11" fill="#ffffff" />
        <circle cx="900" cy="910" r="11" fill="#ffffff" />
        <circle cx="990" cy="910" r="15" fill="#4bb4e9" stroke="#ffffff" strokeWidth="5" />
      </svg>
    </div>
  );
}
