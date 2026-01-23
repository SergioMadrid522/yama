import { StaticImageData } from "next/image";

export interface MenuModalOption {
  page: string;
  link: string;
}

export interface SecondNavbarIcons {
  label: string;
  path: string;
  link: string;
}

export interface Product {
  id: number;
  productName: string;
  ingredients: string; //This could be an array but cannot too, check it out
  category: string;
  price: number;
  image: StaticImageData;
  promo?: boolean;
}

export type MenuContentProps = {
  openMenu: boolean;
};

export interface Ubicacion {
  title: string;
  iframeLink: string;
  catchphrase: string;
  mapsLink: string;
}
