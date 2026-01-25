"use client";

import Image from "next/image";
import { bestSellerProducts, products } from "@/data";
import PromoBadge from "@/util/PromoBadge";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function FindPathame() {
  const pathname = usePathname();
  const [shuffledProducts, setShuffledProducts] = useState<typeof products>([]);

  useEffect(() => {
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    setShuffledProducts(shuffled);
  }, []);

  const list =
    pathname === "/" ? bestSellerProducts : shuffledProducts.slice(0, 10);

  return (
    <>
      {list.map(({ id, productName, ingredients, price, image, promo }) => (
        <article key={id} className="my-4 overflow-hidden rounded-xl shadow-xl">
          <div className="relative flex h-52 bg-gray-900">
            <div className="relative z-10 flex w-full flex-col justify-center px-5 md:w-1/2">
              <h3 className="font-brand text-xl font-black leading-tight text-white md:text-3xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">
                {productName}
              </h3>

              <p className="mt-2 max-w-[200px] text-gray-300 md:max-w-full">
                {ingredients}
              </p>

              <p className="mt-3 text-lg font-bold text-white">${price}</p>

              {promo && <PromoBadge />}
            </div>

            <div className="absolute inset-0 md:static md:w-1/2">
              <Image
                src={image}
                alt={productName}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
