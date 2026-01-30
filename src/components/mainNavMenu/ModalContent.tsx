import { menuModalOptions } from "@/data";
import { MenuContentProps } from "@/types";
import Link from "next/link";

export default function ModalContent({
  openMenu,
  setOpenMenu,
}: MenuContentProps) {
  return (
    <div
      className={`
        absolute top-0 left-0 
        flex h-dvh w-full items-center justify-center 
        lg:justify-end
        bg-white lg:bg-transparent
        transition-opacity duration-300 ease-in-out 
        lg:relative lg:h-9 lg:opacity-100
        ${openMenu ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <ul className="flex flex-col items-center lg:flex-row lg:gap-6">
        {menuModalOptions.map(({ page, link }) => (
          <li key={page} className="py-3 ">
            <Link
              href={link}
              onClick={() => setOpenMenu(false)}
              className="text-2xl lg:text-xl lg:cursor-pointer lg:pointer-events-auto"
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
