import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./component/NavBar";
import ProductList from "./component/ProductList";
import CartPage from "./page/CartPage";
import OrderComplete from "./page/OrderComplete";

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
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
