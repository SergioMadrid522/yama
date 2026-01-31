import { useEffect, useState } from "react";

export function useRandomOption(): string {
  const searchOptions = [
    "Rollos",
    "Guisos",
    "Entradas",
    "Bebidas",
    "Buscar por ingredientes",
    "Surimi Roll",
    "Chop Suey",
    "Banana Yama",
    "Noodles de Pollo",
    "Tepanyaki Mar Mixto",
    "Res en salsa de ostion",
    "Ebi Banderilla",
    "Kushiages",
    "Nori Maki",
  ];
  const [option, setOption] = useState("¿Qué quieres para comer hoy?");

  useEffect(() => {
    const interval = setInterval(() => {
      const random =
        searchOptions[Math.floor(Math.random() * searchOptions.length)];
      setOption(random);
    }, 3500);

    return () => clearInterval(interval);
  }, []);
  return option;
}
