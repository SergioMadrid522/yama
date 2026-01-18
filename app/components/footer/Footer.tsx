import { GLOBAL } from "@/data";

export default function Footer() {
  const { locationIcon } = GLOBAL;
  return (
    <footer>
      <div className="bg-gray-800 text-gray-400 text-center py-8 text-xs">
        <p className="flex items-center justify-center gap-1 pb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className=""
            viewBox="0 0 16 16"
          >
            <path d={locationIcon} />
          </svg>
          Av. Altamira #1003 Monte Alto
        </p>
        <p className="text-gray-500">Yama Japanese Food © 2026</p>
      </div>
    </footer>
  );
}
