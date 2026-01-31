import Image from "next/image";
import { aboutData, GLOBAL } from "@/data";
import banner from "@/assets/banner.webp";
export default function About() {
  const { quotesIcon } = GLOBAL;
  const { years, tagline, stats, signOff, team, since } = aboutData;

  return (
    <main>
      <div className="relative w-full h-[35vh]">
        <Image
          src={banner}
          alt="Local de YAMA"
          fill
          priority
          className="object-cover brightness-75"
        />

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50/50 to-transparent" />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
          <h1 className="text-white font-brand font-black text-3xl md:text-4xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] mb-3 uppercase">
            {years} años
          </h1>
          <h2 className="text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] text-center px-4">
            {tagline}
          </h2>
        </div>
      </div>

      <section className="relative z-10 -mt-12 px-6">
        <div className=" bg-white rounded-[2rem] p-8 border border-gray-100 relative overflow-hidden">
          <div className="flex flex-col gap-3">
            <div className="text-center py-3">
              <h2 className="font-brand text-2xl font-black text-gray-800">
                Nuestra Historia
              </h2>
              <div className="bg-[#9bcac5] mx-auto mt-2 h-1 w-16 rounded-full" />
            </div>
            <p className="text-lg">
              Lo que comenzó hace 9 años como un pequeño sueño, hoy es el lugar
              favorito de muchísimas personas en Monte Alto y la Zona Conurbada.
            </p>
            <p className="text-lg">
              En Yama, creemos que el sushi no tiene que ser pretencioso para
              ser delicioso. Nuestra <strong>misión</strong> siempre ha sido
              simple: ingredientes frescos, porciones generosas y ese toque
              casero que nos hace únicos."
            </p>

            <div className="grid grid-cols-3 border-t border-b border-gray-500/20 ">
              {stats.map(({ stat, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center text-center my-6 relative border-r border-gray-500/20 py-4 self-center last:border-0"
                >
                  <p className="font-brand text-yama-teal block text-2xl font-black text-[#cd5951]">
                    {stat}
                  </p>
                  <p className="text-[11.5px] font-bold text-gray-400 uppercase">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative mt-8 rounded-xl bg-teal-50 p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                className="absolute -top-6 left-4 text-4xl opacity-50 fill-gray-500/40"
                viewBox="0 0 16 16"
              >
                <path d={quotesIcon} />
              </svg>
              <p className="relative z-10 pt-2 text-md text-gray-700 italic">
                "{signOff}"
              </p>

              <div className="mt-2.5">
                <p className="text-xs font-bold text-gray-900">{team}</p>
                <p className="uppercase text-[10px] text-gray-500">
                  Desde {since}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
