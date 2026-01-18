import Image from "next/image";
import banner from "@/app/assets/banner.webp";
import Link from "next/link";
export default function Home() {
  return (
    <header>
      <div className="mt-4 px-4">
        <div className="relative">
          <p>Solo martes y jueves</p>
          <h2>
            Disfruta tus <br /> Rollos al 3x2
          </h2>
          <p>
            La mejor promoción de Altamira. Válido en rollos clásicos,
            empanizados y frutales.
          </p>
          <Link href="">¡Ver Promos!</Link>

          <div className="absolute">
            <Image src={banner} alt="" priority />
          </div>
        </div>
      </div>
    </header>
  );
}
