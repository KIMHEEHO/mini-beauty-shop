import { useCartStore } from "../store/useCartStore.js";
import { useReservationStore } from "../store/useReservationStore.js";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { formatDate } from "../utils/formatDate.js";
import { DateComponent } from "../component/DateComponent.js";
import TimeComponent from "../component/TimeComponent.js";
import CartTable from "../component/CartTable.js";
import { AlertDialog } from "../component/AlertDialog.js";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const addReservation = useReservationStore((state) => state.addReservation);
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

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
              <button
                disabled={!selectedTime || !selectedDate}
                onClick={() => setOpen(true)}
                className={`px-8 py-3 rounded-xl font-bold transition-colors ${
                  !selectedTime || !selectedDate
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-pink-500 hover:bg-pink-600 text-white"
                }`}
              >
                예약하기
              </button>
              <AlertDialog
                title="예약 확인"
                description={`예약 날짜: ${
                  selectedDate ? formatDate(selectedDate) : ""
                } ${selectedTime}\n총 금액: ${cart
                  .reduce((sum, item) => sum + item.price * item.quantity, 0)
                  .toLocaleString()}원\n예약을 진행하시겠습니까?`}
                open={open}
                setOpen={setOpen}
                onConfirm={() => {
                  if (!selectedDate || !selectedTime) return;

                  fetch("/api/reservations", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      id: crypto.randomUUID(),
                      date: selectedDate,
                      time: selectedTime,
                      items: cart,
                      totalPrice: cart.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0,
                      ),
                      status: "reserved",
                    }),
                  })
                    .then((res) => res.json())
                    .then(() => {
                      useCartStore.getState().clearCart();
                      navigate("/order-complete");
                    })
                    .catch((err) => {
                      console.error("예약 실패:", err);
                      alert("예약에 실패했습니다. 다시 시도해주세요.");
                    });
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
