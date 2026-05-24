import { useEffect } from "react";
import { useCartStore } from "../store/useCartStore";
import { Link } from "react-router-dom";
export default function OrderComplete() {
  const clearCart = useCartStore((state) => state.clearCart);
  useEffect(() => {
    clearCart();
  }, []);
  return (
    <div className="text-center py-20">
      <h2 className="text-3xl font-bold mb-6">🎉 예약이 완료되었습니다! 🎉</h2>
      <Link
        to="/"
        className="bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition"
      >
        시술 보러가기
      </Link>
    </div>
  );
}
