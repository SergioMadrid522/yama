import RenderProducts from "./RenderProducts";

export default function BestSeller() {
  return (
    <section className="px-9 py-4">
      <div className="mb-3">
        <h3 className="text-xl font-bold text-gray-800 border-l-4 border-red-400 pl-2">
          Los más vendido
        </h3>

        <RenderProducts />
      </div>
    </section>
  );
}
