import { StaticImageData } from "next/image";

export interface SecondNavbarIcons {
  label: string;
  path: string;
  link: string;
}

export interface BestSellerProduct {
  id: number;
  title: string;
  ingredients: string; //This could be an array but cannot too, check it out
  price: number;
  image: StaticImageData;
}
