import { useCartStore } from "../store/useCartStore";
import type { Product } from "../component/types";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const navigate = useNavigate();
  return (
    <div>
      {cart.length === 0 ? (
        <>
          <div className="text-center py-10">
            <p className="text-gray-500 mb-6">시술목록이 비어있습니다.</p>
            <button
              onClick={() => navigate("/")}
              className="bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition"
            >
              시술 보러가기
            </button>
          </div>
        </>
      ) : (
        <p>
          {cart.map((item: Product) => (
            <span key={item.id}>
              {item.name} - {item.price}원
            </span>
          ))}
        </p>
      )}
    </div>
  );
}
