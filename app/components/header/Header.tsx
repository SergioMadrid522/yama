import { GLOBAL } from "@/data";
import Image from "next/image";
import banner from "@/app/assets/banner.webp";
export default function Header() {
  const { curveLineIcon } = GLOBAL;
  return (
    <header>
      <div className="relative flex flex-row">
        <div className="relative w-3xl">
          <div className="brightness-75">
            <Image src={banner} alt="" priority />
          </div>

          <div className="absolute z-10 inset-0 flex flex-col items-center justify-center">
            <h1 className="text-white font-brand font-black text-3xl md:text-4xl leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] mb-3">
              ¡Bienvenido!
            </h1>
            <p className="text-white font-brand font-black  drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] mb-3 leading-relaxed">
              Descubre el{" "}
              <span className="text-[#4FD1C5] text-xl relative drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">
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
              </span>{" "}
              <br />
              sabor japonés en Altamira
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
