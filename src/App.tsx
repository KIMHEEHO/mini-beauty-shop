import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { Navbar } from "./component/Navbar.js";
import ProductList from "./page/ProductListPage.js";
import CartPage from "./page/CartPage.js";
import OrderComplete from "./page/OrderComplete.js";
import MyPage from "./page/MyPage.js";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <main className="max-w-4xl mx-auto p-4 flex flex-col gap-6">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order-complete" element={<OrderComplete />} />
            <Route path="/my-page" element={<MyPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
