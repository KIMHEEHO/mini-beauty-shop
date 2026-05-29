import { formatDate } from "../utils/formatDate.js";
import { useState } from "react";
import { AlertDialog } from "./AlertDialog.js";
import type { Reservation } from "./types.js";

type ReservationTableProps = {
  reservations: Reservation[];
  setReservations: React.Dispatch<React.SetStateAction<Reservation[]>>;
};
export default function ReservationTable({
  reservations,
  setReservations,
}: ReservationTableProps) {
  const [open, setOpen] = useState(false);
  const [selectedReservationId, setSelectedReservationId] = useState<
    string | null
  >(null);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="grid grid-cols-8 gap-4 p-4 border-b font-bold text-gray-600 bg-gray-50">
        <div className="col-span-2">예약 날짜</div>
        <div className="col-span-3">시술 내역</div>
        <div>가격</div>
        <div>예약 상태</div>
        <div></div>
      </div>
      {reservations.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-8 gap-4 p-4 items-center border-b"
        >
          <div className="col-span-2">
            {formatDate(new Date(item.date))} {item.time}
          </div>
          <div className="col-span-3 font-medium">
            {" "}
            {item.items.map((i: { name: string }) => i.name).join(", ")}
          </div>
          <div>{item.totalPrice.toLocaleString()}원</div>
          <div>{item.status === "reserved" ? "예약 완료" : "예약취소"}</div>
          <div className="flex gap-4 justify-end">
            {item.status === "reserved" && (
              <>
                <button
                  onClick={() => {
                    setSelectedReservationId(item.id);
                    setOpen(true);
                  }}
                  className="text-red-400 hover:text-red-600 transition hover:cursor-pointer"
                >
                  예약 취소
                </button>

                <AlertDialog
                  title="예약 취소 확인"
                  description={"예약을 취소하시겠습니까?"}
                  open={open}
                  setOpen={setOpen}
                  onConfirm={() => {
                    if (!selectedReservationId) return;
                    // cancelReservation(selectedReservationId);
                    fetch(`/api/reservations/${selectedReservationId}`, {
                      method: "PATCH",
                    })
                      .then((res) => res.json())
                      .then(() => {
                        setReservations((prev: Reservation[]) =>
                          prev.map((res) =>
                            res.id === selectedReservationId
                              ? { ...res, status: "cancelled" }
                              : res,
                          ),
                        );
                      });
                  }}
                />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
