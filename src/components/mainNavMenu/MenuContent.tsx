import { GLOBAL } from "@/data";
import ModalContent from "./ModalContent";
import { MenuContentProps } from "@/types";

export default function MenuContent({
  openMenu,
  setOpenMenu,
}: MenuContentProps) {
  const { hamburgerBtnIcon, closeMenuIcon } = GLOBAL;
  const handleClick = () => setOpenMenu(!openMenu);

  return (
    <>
      <button
        className={`bg-transparent cursor-pointer border-0 ${openMenu ? "z-30" : "lg:hidden"}`}
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="currentColor"
          className=""
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d={openMenu ? closeMenuIcon : hamburgerBtnIcon}
          />
        </svg>
      </button>

      <ModalContent openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
}
