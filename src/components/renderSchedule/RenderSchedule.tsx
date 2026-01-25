import { GLOBAL, horario } from "@/data";

export default function RenderSchedule() {
  const { clock } = GLOBAL;
  return (
    <div className="flex flex-col gap-2 w-fit m-auto border border-gray-500/30 rounded-xl py-4 px-6">
      <div className="relative w-16 h-16 bg-white border-3 border-[#322629]/10 rounded-full flex items-center justify-center mx-auto mb-5 shadow-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-clock"
          viewBox="0 0 16 16"
        >
          <path d={clock.circlePath} />
          <path d={clock.clockHands} />
        </svg>
      </div>

      <h1 className="font-sans font-[900] text-3xl tracking-tighter text-gray-900 select-none text-center">
        Nuestros horarios
      </h1>

      {horario.map(({ day, schedule, isClose, promo }) => (
        <div
          key={day}
          className="grid grid-cols-2 items-center justify-center gap-5 py-2 border-b border-b-gray-500/30 text-lg text-center w-full last:border-b-0"
        >
          {day === "Martes" || day === "Jueves" ? (
            <div className="relative ">
              <p className="font-bold">{day}</p>
              <p className="absolute top-0 left-0 text-[14px] bg-[#4db7c7]/25 px-1 rounded-[5px] -rotate-45 animate-pulse">
                {promo}
              </p>
            </div>
          ) : (
            <p>{day}</p>
          )}

          {isClose ? (
            <p className="bg-red-100 text-red-600 px-2 py-1 rounded-md font-semibold">
              Cerrado
            </p>
          ) : (
            <p>{schedule}</p>
          )}
        </div>
      ))}
    </div>
  );
}
