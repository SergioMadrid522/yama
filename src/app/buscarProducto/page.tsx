"use client";
import { useRandomOption } from "@/hooks/useRandomOption";
import RenderProducts from "@/util/RenderProducts";
import { useState } from "react";

export default function SearchPage() {
  const option = useRandomOption();
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const dismissKeyboard = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <main
      className="px-5 pt-2 md:px-10 md:pt-0 lg:px-20 lg:pt-0"
      onTouchStart={dismissKeyboard}
      onWheel={dismissKeyboard}
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="px-5 py-5">
          <input
            type="text"
            placeholder={`${option}`}
            className="w-full p-3 text-[18px] rounded-xl outline-1 outline-gray-300 text-base"
            value={query}
            onChange={handleInputChange}
          />
        </div>
      </form>

      {query ? <RenderProducts query={query} /> : <RenderProducts />}
    </main>
  );
}
