import Image from "next/image";
import Link from "next/link";
import trompoRoll from "@/app/assets/bestSeller/trompoRoll.webp";

export default function BestSeller() {
  return (
    <section className="px-9 py-4">
      <div className="mb-3">
        <h3 className="text-xl font-bold text-gray-800 border-l-4 border-red-400 pl-2">
          Los más vendido
        </h3>
      </div>

      <article className="rounded-xl shadow-xl overflow-hidden">
        <Link href="/producto/1" className="relative flex h-52 bg-gray-900">
          <div className="relative z-10 flex w-full flex-col justify-center px-5 md:w-1/2">
            <h3 className="font-brand font-black text-xl md:text-3xl text-white leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">
              Trompo Roll
            </h3>

            <p className="mt-2 text-gray-300 max-w-[200px] md:max-w-full">
              Carne al pastor, piña, queso manchego, y aguacate.
            </p>

            <p className="mt-3 text-lg font-bold text-white">$130</p>
          </div>

          <div className="absolute inset-0 md:static md:w-1/2">
            <Image
              src={trompoRoll}
              alt="Trompo Roll"
              className="h-full w-full object-cover "
              priority
            />

            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
          </div>
        </Link>
      </article>
    </section>
  );
}
