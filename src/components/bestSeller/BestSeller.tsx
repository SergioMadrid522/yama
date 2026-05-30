import RenderProducts from "@/util/RenderProducts";

export default function BestSeller() {
  return (
    <section
      className="
        px-5 pt-10 pb-5
        md:px-10
        lg:px-20
      "
    >
      <div className="max-w-7xl mx-auto mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 border-l-4 border-red-400 pl-2">
          Los más vendidos
        </h2>
      </div>

      <RenderProducts />
    </section>
  );
}
