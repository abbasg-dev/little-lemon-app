import { FC, SVGProps } from "react";

export interface Contacts {
  icon: FC<SVGProps<SVGSVGElement>>;
  info: string;
}
export interface Socials {
  icon: FC<SVGProps<SVGSVGElement>>;
  name: string;
}
export interface Links {
  name: string;
  path: string;
  hashLink: boolean;
}
export interface Customers {
  fullName: string;
  image: string;
  rating: number[];
  says: string;
}
export interface Meals {
  name?: string;
  image?: string;
  price?: string;
  description?: string;
}
export interface BookingProps {
  availableTimes?: string[];
  dispatch?: React.Dispatch<any>;
}
export interface BookingData {
  date?: string;
  time?: string;
  guests?: number | string;
  occasion?: string;
}
