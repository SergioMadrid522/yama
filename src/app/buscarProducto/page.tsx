import RenderProducts from "@/util/RenderProducts";

export default function SearchPage() {
  return (
    <main>
      <form>
        <div className="px-5 py-10">
          <input
            type="text"
            placeholder="¿Qué estás buscando?"
            className="w-full p-3 text-[18px] rounded-xl outline-1 outline-gray-300"
          />
        </div>
      </form>

      <RenderProducts />
    </main>
  );
}
