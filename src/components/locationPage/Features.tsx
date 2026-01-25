import { features } from "@/data";

export default function Features() {
  return (
    <section className="flex items-center justify-evenly py-6">
      {features.map(({ icon, name, label }) => (
        <div
          key={name}
          className="flex flex-col items-center justify-center bg-white  border-3 border-[#322629]/10 rounded-[2rem] p-8 drop-shadow-[0_1px_5px_rgba(0,0,0,0.15)] text-center relative "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="fill-gray-500/30"
            viewBox="0 0 16 16"
          >
            <path d={icon} />
          </svg>
          <p className="font-bold text-xl">{name}</p>
          <p className="bg-[#4fa372]/15 px-2 py-1 rounded-xl">{label}</p>
        </div>
      ))}
    </section>
  );
}
