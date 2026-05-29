import { useCartStore } from "../store/useCartStore.js";
export default function CartTable() {
  const cart = useCartStore((state) => state.cart);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  return (
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
    </div>
  );
}
