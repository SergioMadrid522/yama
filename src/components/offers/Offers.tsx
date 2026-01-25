import RenderOffer from "./RenderOffer";

export default function Offers() {
  return (
    <section className="px-5 pt-7">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800 border-l-4 border-yama-red pl-2">
          Martes y Jueves
        </h3>
      </div>

      <RenderOffer />
    </section>
  );
}
