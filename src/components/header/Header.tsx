import { GLOBAL } from "@/data";
import Image from "next/image";
import banner from "@/assets/banner.webp";

export default function Header() {
  const { curveLineIcon } = GLOBAL;

  return (
    <header
      className="
        w-full
        md:h-[70vh]
        lg:h-[500px]
      "
    >
      <div className="relative flex flex-row h-full">
        <div className="relative w-full">
          <div className="brightness-75 h-full">
            <Image
              src={banner}
              alt=""
              priority
              className="object-cover w-full h-full"
            />
          </div>

          <div
            className="
              absolute inset-0 z-10
              flex flex-col items-center justify-center
              px-4
              md:px-10
              lg:px-20
            "
          >
            <h1
              className="
                text-white font-brand font-black
                text-3xl
                md:text-4xl
                lg:text-5xl
                leading-tight
                drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]
                mb-4
              "
            >
              ¡Bienvenido!
            </h1>

            <p
              className="
                text-white font-brand font-black
                text-base
                md:text-lg
                lg:text-xl
                leading-relaxed
                text-center
                drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]
              "
            >
              Descubre el{" "}
              <span className="text-[#4FD1C5] relative inline-block">
                verdadero
                <svg
                  className="absolute -bottom-1.5 left-0 w-full"
                  height="10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d={curveLineIcon}
                    stroke="#4FD1C5"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>
              <br />
              sabor japonés en Altamira
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
