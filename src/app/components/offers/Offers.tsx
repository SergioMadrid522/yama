import RenderOffer from "./RenderOffer";

export default function Offers() {
  return (
    <section className="p-9 pb-2">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold text-gray-800 border-l-4 border-yama-red pl-2">
          Martes y Jueves
        </h3>
      </div>

      <RenderOffer />
    </section>
  );
}
