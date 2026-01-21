import Image from "next/image";
//import Link from "next/link";
import { bestSellerProducts } from "@/data";

export default function RenderProducts() {
  return (
    <>
      {bestSellerProducts.map(
        ({ id, title, ingredients, price, image, promo }) => (
          <article
            key={id}
            className="rounded-xl shadow-xl overflow-hidden my-4 "
          >
            <div className="relative flex h-52 bg-gray-900">
              <div className="relative z-10 flex w-full flex-col justify-center px-5 md:w-1/2">
                <h3 className="font-brand font-black text-xl md:text-3xl text-white leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">
                  {title}
                </h3>

                <p className="mt-2 text-gray-300 max-w-[200px] md:max-w-full">
                  {ingredients}
                </p>

                <p className="mt-3 text-lg font-bold text-white">${price}</p>

                {promo && (
                  <div
                    className="
                    absolute top-0 right-0
                    text-yellow-500 drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]
                    border border-yellow-500/50 
                  bg-yellow-500/10
                    px-3 py-1 
                    rounded-full 
                    text-[18px] md:text-xs 
                    font-sans font-bold uppercase tracking-widest 
                    w-fit
                    animate-pulse
                    "
                  >
                    <p>3x2</p>
                  </div>
                )}
              </div>

              <div className="absolute inset-0 md:static md:w-1/2">
                <Image
                  src={image}
                  alt="Trompo Roll"
                  className="h-full w-full object-cover "
                  priority
                />

                <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
              </div>
            </div>
          </article>
        ),
      )}
    </>
  );
}
