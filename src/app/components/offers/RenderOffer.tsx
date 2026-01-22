import Image from "next/image";
import Link from "next/link";
import promosImage from "@/assets/promosImage.webp";

export default function RenderOffer() {
  return (
    <article className="block px-0 pt-8 pb-0">
      <Link href="/promociones" className="">
        <div className="relative rounded-xl overflow-hidden flex flex-col justify-center">
          <div className="absolute z-20 px-3 py-2">
            <h3 className="text-white font-brand font-black text-3xl md:text-4xl leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] mb-3">
              Sushi 3x2
            </h3>
            <p className="mt-2 text-gray-300 max-w-[200px] md:max-w-full">
              En categorías seleccionadas
            </p>
          </div>

          <div className="abosulte inset-0 h-48 md:h-auto md:w-1/2 md:absolute md:right-0 md:inset-y-0">
            <Image
              src={promosImage}
              alt=""
              className="w-full h-full object-cover scale-x-[-1]"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
          </div>
        </div>
      </Link>
    </article>
  );
}
