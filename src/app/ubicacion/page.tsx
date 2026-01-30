import Features from "@/components/locationPage/Features";
import { GLOBAL, ubicacionData } from "@/data";

export default function Location() {
  const { locationIcon } = GLOBAL;
  const { title, iframeLink, catchPhrase, mapsLink, address } = ubicacionData;

  return (
    <main>
      {/* MAPA */}
      <div className="w-full relative h-[35vh] md:h-[45vh] lg:h-[55vh]">
        <iframe
          src={iframeLink}
          className="w-full h-full object-cover border-0 brightness-90"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50/50 to-transparent" />
      </div>

      {/* CARD */}
      <section className="relative z-10 px-6 -mt-12 md:px-10 md:-mt-20 lg:px-20 lg:-mt-28">
        <div
          className="bg-white rounded-[2rem] p-8 md:p-10 lg:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100 text-center relative overflow-hidden max-w-3xl mx-auto
          "
        >
          {/* ICON */}
          <div className="relative w-16 h-16 md:w-18 md:h-18 bg-white border-3 border-[#322629]/10 rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#25a4c4"
              viewBox="0 0 16 16"
            >
              <path d={locationIcon} />
            </svg>
          </div>

          {/* TITULO */}
          <h1 className="font-sans font-[900] text-3xl md:text-4xl tracking-tighter text-gray-900 select-none">
            {title}
          </h1>

          {/* FRASE */}
          <h2 className="flex items-center justify-center p-6 text-lg md:text-xl italic text-gray-500/80">
            "{catchPhrase}"
          </h2>

          {/* DIRECCIÓN */}
          <div>
            <div className="relative bg-gray-500/5 rounded-xl px-4 pb-4 text-[17px] text-left">
              <div className="uppercase text-[13px] py-2 text-gray-500/90">
                dirección
              </div>
              {address}
            </div>

            {/* BOTÓN */}
            <div className="py-5">
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full md:w-auto md:px-10 mx-auto bg-white text-yama-teal border-2 border-yama-teal font-black py-3 rounded-xl hover:bg-teal-50 transition-colors"
              >
                ¡Llévame!
              </a>
            </div>
          </div>
        </div>
      </section>

      <Features />
    </main>
  );
}
