import { useCartStore } from "../store/useCartStore";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const navigate = useNavigate();
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">🛒 장바구니</h2>
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
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-6 gap-4 p-4 border-b font-bold text-gray-600 bg-gray-50">
              <div className="col-span-2">시술 이름</div>
              <div>가격</div>
              <div>수량</div>
              <div>합계</div>
              <div></div>
            </div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-6 gap-4 p-4 items-center border-b"
              >
                <div className="col-span-2 font-medium">{item.name}</div>
                <div>{item.price.toLocaleString()}원</div>
                <div className="flex items-center gap-2">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>

                <div className="font-bold">
                  {(item.price * item.quantity).toLocaleString()}원
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 center cursor-pointer hover:text-red-600 transition"
                >
                  삭제
                </button>
              </div>
            ))}
            <div className="p-6 flex justify-end gap-4">
              <div className="text-lg font-bold">
                결제하실 금액:
                {cart
                  .reduce((sum, item) => sum + item.price * item.quantity, 0)
                  .toLocaleString()}
                원
              </div>
            </div>
            <div className="p-6 flex justify-end gap-4">
              <button
                onClick={() => navigate("/")}
                className="px-6 py-3 border rounded-xl"
              >
                쇼핑 계속하기
              </button>
              <button
                className="bg-pink-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-pink-600"
                onClick={() => navigate("/order-complete")}
              >
                예약하기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
