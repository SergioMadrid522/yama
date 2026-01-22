"use client";

import { GLOBAL } from "@/data";
import { useState } from "react";
import MenuContent from "./MenuContent";

export default function HamburgerBtn() {
  const { hamburgerBtnIcon, closeMenuIcon } = GLOBAL;
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => setOpenMenu(!openMenu);

  return (
    <>
      <button
        className={`bg-transparent cursor-pointer border-0 ${openMenu ? "z-30" : ""}`}
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

      <MenuContent openMenu={openMenu} />
    </>
  );
}
