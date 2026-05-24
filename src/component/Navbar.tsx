import { AppBar, Toolbar } from "@mui/material";

export function Navbar() {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#ffffff",
          color: "#1f2937",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        }}
      >
        <Toolbar className="max-w-6xl w-full mx-auto flex justify-between items-center px-4">
          <div className="flex-1 text-gray-500 ">
            <span>
              <i className="fa-solid fa-bars text-lg cursor-pointer hover:text-pink-500"></i>
            </span>
          </div>

          <span className="font-extrabold text-xl tracking-tight text-pink-500 select-none">
            mini-beauty-shop ✨
          </span>

          <div className="flex-1 flex justify-end items-center text-gray-600 hover:text-pink-500 cursor-pointer">
            <span>
              <i className="fa-solid fa-cart-arrow-down"></i>
            </span>
          </div>
        </Toolbar>
      </AppBar>

      {/* 높이 잡아주는 빈 툴바 */}
      <Toolbar />
    </>
  );
}
