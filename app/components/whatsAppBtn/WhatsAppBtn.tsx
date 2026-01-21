import { GLOBAL } from "@/data/data";

export default function WhatsAppBtn() {
  const { whatsappBtnIcon } = GLOBAL;
  return (
    <a
      href="#"
      className="fixed bottom-28 right-6 bg-green-500 text-white w-15 h-15 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition z-50 drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        className=""
        viewBox="0 0 16 16"
      >
        <path d={whatsappBtnIcon} />
      </svg>
    </a>
  );
}
