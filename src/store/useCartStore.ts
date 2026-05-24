import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product, CartItem } from "../component/types";

// 스토어의 상태(State)와 액션(Action) 타입 정의
interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      // 장바구니에 상품 추가하기
      addToCart: (product) =>
        set((state) => {
          const isExist = state.cart.find((item) => item.id === product.id);

          if (isExist) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),

      // 선택한 상품 삭제하기
      removeFromCart: (productId) =>
        set((state) => {
          const updatedCart = state.cart.filter(
            (item) => item.id !== productId,
          );
          return { cart: updatedCart };
        }),

      // 상품 수량 감소시키기
      decreaseQuantity: (productId) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            )
            .filter((item) => item.quantity > 0),
        })),
      // 상품 수량 증가시키기
      increaseQuantity: (productId) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        })),
      // 🧹 장바구니 전체 비우기
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "beauty-cart-storage", // 로컬스토리지에 저장될 Key 이름 지정
    },
  ),
);
