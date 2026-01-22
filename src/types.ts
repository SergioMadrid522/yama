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

export interface BestSellerProduct {
  id: number;
  title: string;
  ingredients: string; //This could be an array but cannot too, check it out
  category: string;
  price: number;
  image: StaticImageData;
  promo?: boolean;
}

export type MenuContentProps = {
  openMenu: boolean;
};
