import { useCartStore } from "../store/useCartStore.js";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { formatDate } from "../utils/formatDate.js";
import { DateComponent } from "../component/DateComponent.js";
import TimeComponent from "../component/TimeComponent.js";
import CartTable from "../component/CartTable.js";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">예약하기</h2>
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
          <>
            <CartTable />
            <div className="flex gap-8 w-full mt-5">
              <DateComponent
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
              <TimeComponent
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
              />{" "}
            </div>
            <div className="p-6 flex flex-col items-end gap-4 border-t mt-6">
              <div className="text-lg font-bold">
                예약 날짜 : {selectedDate ? formatDate(selectedDate) : ""}{" "}
                {selectedTime}
              </div>
              <div className="text-lg font-bold">
                결제하실 금액:
                {cart
                  .reduce((sum, item) => sum + item.price * item.quantity, 0)
                  .toLocaleString()}
                원
              </div>
              <Link
                to="/order-complete"
                onClick={() => {
                  alert("예약완료! 이제 로컬스토리지에 저장할게~? ");
                }}
                className={`px-8 py-3 rounded-xl font-bold transition-colors ${
                  !selectedTime || !selectedDate
                    ? "bg-gray-300 pointer-events-none"
                    : "bg-pink-500 hover:bg-pink-600 text-white"
                }`}
              >
                예약하기
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
