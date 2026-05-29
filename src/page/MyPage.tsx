import { useReservationStore } from "../store/useReservationStore.js";
import { useNavigate } from "react-router-dom";
import ReservationTable from "../component/ReservationTable.js";
export default function MyPage() {
  const navigate = useNavigate();
  const reservations = useReservationStore((state) => state.reservations);
  const cancelReservation = useReservationStore(
    (state) => state.cancelReservation,
  );

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">내 예약 내역</h2>
        {reservations.length === 0 ? (
          <>
            <div className="text-center py-10">
              <p className="text-gray-500 mb-6">예약 내역이 없습니다.</p>
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
            <ReservationTable />
          </>
        )}
      </div>
    </div>
  );
}
