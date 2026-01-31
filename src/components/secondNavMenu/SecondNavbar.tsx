import { secondNavbarIcons } from "@/data";
import Link from "next/link";

export default function SecondNavbar() {
  return (
    <nav className="fixed bottom-0 z-50 w-full border-t border-gray-100 bg-white/95 px-6 py-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] backdrop-blur-sm ">
      <div className="group grid grid-cols-3 gap-1">
        {secondNavbarIcons.map(({ label, path, link }) => (
          <Link
            href={link}
            key={label}
            className="relative text-center text-[#333]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#333"
              className="m-auto"
              viewBox="0 0 16 16"
            >
              <path d={path} />
            </svg>
            <p>{label}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
}
