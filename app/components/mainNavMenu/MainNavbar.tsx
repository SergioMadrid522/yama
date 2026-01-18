import { GLOBAL } from "@/data";

export default function MainNavbar() {
  const { hamburgerBtnIcon, shoppingCartIcon } = GLOBAL;
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white/90 px-5 py-3 shadow-sm backdrop-blur-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill="currentColor"
        className=""
        viewBox="0 0 16 16"
      >
        <path fillRule="evenodd" d={hamburgerBtnIcon} />
      </svg>

      <p>YAMA</p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill="currentColor"
        className=""
        viewBox="0 0 16 16"
      >
        <path d={shoppingCartIcon} />
      </svg>
    </nav>
  );
}
