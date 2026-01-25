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
  setOpenMenu: (value: boolean) => void;
};

export interface Ubicacion {
  iframeLink: string;
  title: string;
  catchPhrase: string;
  address: string;
  mapsLink: string;
}

export interface Horario {
  day: string;
  schedule?: string;
  isClose?: boolean;
  promo?: string;
}

export interface Features {
  icon: string;
  name: string;
  label: string;
}

export interface AboutData {
  years: number;
  tagline: string;
  stats: {
    stat: string;
    label: string;
  }[];

  signOff: string;
  team: string;
  since: number;
}
