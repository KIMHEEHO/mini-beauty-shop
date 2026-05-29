import { http, HttpResponse } from "msw";
import productData from "./product.json" with { type: "json" };

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 👇 메모리 DB (핵심)
let reservations: any[] = [];

export const handlers = [
  // 제품 GET
  http.get("/api/get_product", async () => {
    await delay(100);
    return HttpResponse.json(productData);
  }),

  // 예약 생성 (POST)
  http.post("/api/reservations", async ({ request }) => {
    const newRes = await request.json();

    reservations.push(newRes);

    return HttpResponse.json(newRes);
  }),

  // 예약 조회 (GET)
  http.get("/api/reservations", async () => {
    return HttpResponse.json(reservations);
  }),

  http.patch("/api/reservations/:id", async ({ params }) => {
    const { id } = params;

    reservations = reservations.map((res) =>
      res.id === id ? { ...res, status: "cancelled" } : res,
    );

    return HttpResponse.json({ success: true });
  }),
];
