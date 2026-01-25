import { menuModalOptions } from "@/data";
import { MenuContentProps } from "@/types";
import Link from "next/link";

export default function ModalContent({
  openMenu,
  setOpenMenu,
}: MenuContentProps) {
  return (
    <div
      className={`absolute top-0 left-0 flex h-dvh w-full items-center justify-center bg-white transition-opacity duration-300 ease-in-out
        ${openMenu ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <ul className="flex flex-col items-center">
        {menuModalOptions.map(({ page, link }) => (
          <li key={page} className="py-3 ">
            <Link
              href={link}
              onClick={() => setOpenMenu(false)}
              className="text-2xl"
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
