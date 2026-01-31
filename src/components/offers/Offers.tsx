import RenderOffer from "./RenderOffer";

export default function Offers() {
  return (
    <section className="px-5 pt-7 md:px-10 md:pt-10 lg:px-20 lg:pt-14">
      <div className="flex items-center justify-between max-w-7xl mx-auto mb-4">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 border-l-4 border-yama-red pl-2">
          Martes y Jueves
        </h3>
      </div>

      <div className="max-w-7xl mx-auto">
        <RenderOffer />
      </div>
    </section>
  );
}
