import { Grid } from "@mui/material";
import type { Product } from "./types";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 h-full flex flex-col justify-between hover:shadow-md transition">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 leading-snug">
            {product.name}
          </h3>
        </div>

        <div className="mt-4">
          <p className="text-xl font-extrabold text-purple-600 mb-3">
            {product.price.toLocaleString()}원
          </p>
          <button className="w-full bg-pink-500 text-white font-medium px-4 py-2.5 rounded-xl hover:bg-pink-600 transition shadow-sm">
            장바구니에 담기
          </button>
        </div>
      </div>
    </Grid>
  );
}
