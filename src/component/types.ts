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

export interface CartItem extends Product {
  quantity: number;
}

export interface Reservation {
  id: string;
  date: Date;
  time: string;
  items: CartItem[];
  totalPrice: number;
  status: "reserved" | "cancelled";
}
