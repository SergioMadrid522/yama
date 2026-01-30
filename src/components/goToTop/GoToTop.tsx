"use client";
import { GLOBAL } from "@/data";
import { useEffect, useState } from "react";

export default function GoToTop() {
  const { chevronUpIcon } = GLOBAL;
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <a
      href="#pageTop"
      className="
        fixed bottom-45 right-6 z-40
        w-15 h-15 rounded-full shadow-2xl 
        bg-black/60 backdrop-blur-md text-white
        flex items-center justify-center
        border border-white/10
        hover:bg-black/80 hover:scale-110
        transition-all duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path fillRule="evenodd" d={chevronUpIcon} />
      </svg>
    </a>
  );
}
