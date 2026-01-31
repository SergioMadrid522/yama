import Image from "next/image";
import PromoBadge from "@/util/PromoBadge";
import { ProductCardProps } from "@/types";

export default function ProductCard({ ...product }: ProductCardProps) {
  const { id, productName, ingredients, price, image, promo } = product;

  return (
    <article
      key={id}
      className="my-2 overflow-hidden rounded-xl shadow-2xl transition-transform duration-300 lg:hover:-translate-y-1"
    >
      <div className="relative flex h-52 md:h-60 lg:h-64 bg-black/60 backdrop-blur-md ">
        <div className="relative z-10 flex w-full flex-col justify-center px-5 md:w-md md:px-6 lg:px-8">
          <h3 className="font-brand font-black text-[24px] md:text-2xl lg:text-3xl leading-tight text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">
            {productName}
          </h3>

          <p className="mt-2 max-w-[250px] md:max-w-full text-lg md:text-base text-white">
            {ingredients}
          </p>

          <p className="mt-3 text-lg md:text-xl font-bold text-white">
            ${price}
          </p>

          {promo && <PromoBadge />}
        </div>

        <div className="absolute inset-0">
          <Image
            src={image}
            alt={productName}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent md:from-black/50" />
        </div>
      </div>
    </article>
  );
}
