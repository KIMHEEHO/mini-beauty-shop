import { AppBar, Toolbar } from "@mui/material";
import { useCartStore } from "../store/useCartStore.js";
import { Link } from "react-router-dom";

export function Navbar() {
  const cart = useCartStore((state) => state.cart);

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#ffffff",
          color: "#1f2937",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          zIndex: 1200,
        }}
      >
        <Toolbar className="max-w-6xl w-full mx-auto flex justify-between items-center px-4">
          <div className="flex-1 text-gray-500 ">
            <Link to="/my-page" className="hover:text-pink-500 transition">
              <i
                data-cy="mypage-button"
                className="fa-solid fa-user text-xl"
              ></i>
            </Link>
          </div>

          <div className="font-extrabold text-xl tracking-tight text-pink-500 select-none hover:text-pink-600 transition cursor-pointer">
            <Link to="/"> mini-beauty-shop ✨</Link>
          </div>
          <Link
            to="/cart"
            className="flex-1 flex justify-end items-center text-gray-600 hover:text-pink-500 cursor-pointer"
          >
            <div className="relative">
              <span>
                <i
                  data-cy="cart-button"
                  className="fa-solid fa-cart-arrow-down text-xl"
                ></i>
              </span>
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">
                  {totalQuantity}
                </span>
              )}
            </div>
          </Link>
        </Toolbar>
      </AppBar>

      {/* 높이 잡아주는 빈 툴바 */}
      <Toolbar />
    </>
  );
}
