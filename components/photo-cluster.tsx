import Image from "next/image";
import { ConnectionLines } from "@/components/connection-lines";
import { PhotoGrid } from "@/components/photo-grid";

export function PhotoCluster() {
  return (
    <div className="relative mx-auto h-full min-h-0 w-full max-w-[40rem] lg:max-w-none">
      <PhotoGrid />

      <figure className="absolute top-[10%] right-[4%] z-10 h-[68%] w-[62%] overflow-hidden rounded-[1.75rem] border-[3px] border-white shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
        <Image
          src="/photos/foto-2.jpg"
          alt="Monteur met groene helm werkt aan een blauwe scheepsconstructie"
          width={2362}
          height={3543}
          priority
          sizes="(min-width: 1024px) 34vw, 70vw"
          className="h-full w-full object-cover object-[center_30%]"
        />
      </figure>

      <figure className="absolute top-[22%] left-[2%] z-20 h-[52%] w-[48%] overflow-hidden rounded-[1.75rem] border-[3px] border-white shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
        <Image
          src="/photos/foto-1.jpg"
          alt="Technicus met veiligheidsbril bedient een machine in een productiehal"
          width={2362}
          height={3543}
          priority
          sizes="(min-width: 1024px) 24vw, 55vw"
          className="h-full w-full object-cover object-[center_35%]"
        />
      </figure>

      <ConnectionLines />
    </div>
  );
}
