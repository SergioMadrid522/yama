import Image from "next/image";
import Link from "next/link";
import promosImage from "@/app/assets/promosImage.webp";

export default function Offers() {
  return (
    <section className="p-9">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-gray-800 border-l-4 border-yama-red pl-2">
          Martes y Jueves
        </h3>
      </div>

      <article className="">
        <Link href="/promos" className="block">
          <div className="relative rounded-xl overflow-hidden flex flex-col justify-center">
            <div className="absolute z-20 px-3 py-2">
              <h3 className="text-white font-brand font-black text-3xl md:text-4xl leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] mb-3">
                Sushi 3x2
              </h3>
              <p className="text-[18px] text-gray-300 mb-6 max-w-md">
                En categorías <br />
                seleccionadas
              </p>
            </div>

            <div className="abosulte inset-0 h-48 md:h-auto md:w-1/2 md:absolute md:right-0 md:inset-y-0">
              <Image
                src={promosImage}
                alt=""
                className="w-full h-full object-cover scale-x-[-1] opacity-80 md:opacity-100"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/65 to-transparent" />
            </div>
          </div>
        </Link>
      </article>
    </section>
  );
}
