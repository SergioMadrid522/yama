import RenderProducts from "@/util/RenderProducts";

export default function BestSeller() {
  return (
    <section>
      <div className="mb-3">
        <div className="px-5 pt-10 pb-5">
          <h3 className="text-xl font-bold text-gray-800 border-l-4 border-red-400 pl-2">
            Los más vendido
          </h3>
        </div>

        <RenderProducts />
      </div>
    </section>
  );
}
