import Image from "next/image";
import Link from "next/link";
import promosImage from "@/assets/promosImage.webp";

export default function RenderOffer() {
  return (
    <article className="my-4 overflow-hidden rounded-xl shadow-xl">
      <Link href="/promociones" className="">
        <div className="relative flex h-52 bg-gray-900">
          <div className="relative z-10 flex w-full flex-col justify-center px-5 md:w-1/2">
            <h3 className="text-white font-brand font-black text-3xl md:text-4xl leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] mb-3">
              Sushi 3x2
            </h3>
            <p className="mt-2 text-gray-300 max-w-[200px] md:max-w-full">
              En categorías seleccionadas
            </p>
          </div>

          <div className="absolute inset-0 md:static md:w-1/2">
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
