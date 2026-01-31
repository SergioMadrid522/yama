// context/ModalContext.tsx
"use client";

import { createContext, useContext, useState } from "react";

type ModalContextType = {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <ModalContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used inside ModalProvider");
  }
  return context;
}
