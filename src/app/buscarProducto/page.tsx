"use client";
import RenderProducts from "@/util/RenderProducts";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const pathname = usePathname();

  return (
    <main>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="px-5 py-10">
          <input
            type="text"
            placeholder="¿Qué estás buscando?"
            className="w-full p-3 text-[18px] rounded-xl outline-1 outline-gray-300"
            value={query}
            onChange={handleInputChange}
          />
        </div>
      </form>

      {query ? <RenderProducts query={query} /> : <RenderProducts />}
    </main>
  );
}
