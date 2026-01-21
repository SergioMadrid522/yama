import { GLOBAL } from "@/data";
import logo from "@/app/assets/logo.webp";
import Link from "next/link";
import HamburgerBtn from "./HamburgerBtn";
export default function MainNavbar() {
  /* const { shoppingCartIcon } = GLOBAL; */
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white/90 px-5 py-3 shadow-sm backdrop-blur-md">
      <HamburgerBtn />

      <Link
        href="/"
        className="relative flex flex-col items-center justify-center"
      >
        <h1 className="font-sans font-[900] text-3xl tracking-tighter text-gray-900 select-none">
          YAMA
        </h1>
        <div className="absolute bg-red-500 -top-[2.4px] right-[32.5px] w-2.5 h-2.5 rounded-full" />
        <span className="text-[0.6rem] uppercase tracking-widest -mt-1 text-gray-500">
          Japanese Food
        </span>
      </Link>

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill="currentColor"
        className=""
        viewBox="0 0 16 16"
      >
        <path d={shoppingCartIcon} />
      </svg> */}
    </nav>
  );
}
