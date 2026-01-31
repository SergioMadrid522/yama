import { features } from "@/data";

export default function Features() {
  return (
    <section className="py-6 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-2 max-w-2xl mx-auto ">
        {features.map(({ icon, name, label }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center bg-white border-3 border-[#322629]/10 rounded-[2rem] p-6 md:p-8 text-center relative drop-shadow-[0_1px_5px_rgba(0,0,0,0.15)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="fill-gray-500/30 mb-2"
              viewBox="0 0 16 16"
            >
              <path d={icon} />
            </svg>

            <p className="font-bold text-lg md:text-xl">{name}</p>

            <p className="mt-1 bg-[#4fa372]/15 px-3 py-1 rounded-xl text-sm md:text-base">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
