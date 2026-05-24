export type TabValue =
  | "lifting"
  | "botox"
  | "filler"
  | "skin-care"
  | "skin-booster"
  | "diet";

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}
