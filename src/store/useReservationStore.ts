import type { Reservation } from "../component/types.js";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ReservationState {
  reservations: Reservation[];
  addReservation: (reservation: Reservation) => void;
  cancelReservation: (id: string) => void;
}

export const useReservationStore = create<ReservationState>()(
  persist(
    (set) => ({
      reservations: [],
      addReservation: (reservation) =>
        set((state) => ({
          reservations: [...state.reservations, reservation],
        })),
      cancelReservation: (id) =>
        set((state) => ({
          reservations: state.reservations.map((res) =>
            res.id === id ? { ...res, status: "cancelled" } : res,
          ),
        })),
    }),
    {
      name: "beauty-reservation-storage",
    },
  ),
);
