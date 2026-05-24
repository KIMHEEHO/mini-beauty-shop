import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import type { Product, TabValue } from "./types";
import ProductItem from "./ProductItem";
import { CategoryTab } from "./CategoryTab";

export default function ProductList() {
  const [tab, setTab] = useState<TabValue>("lifting");

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/mock/product.json")
      .then((res) => res.json())
      .then((data: Product[]) => {
        const filtered = data.filter((item) => item.category === tab);
        setProducts(filtered);
      })
      .catch((err) => console.error("데이터 로드 실패:", err));
  }, [tab]);

  return (
    <>
      <CategoryTab currentTab={tab} changeTab={setTab} />
      {products.length > 0 ? (
        <Grid container spacing={3} sx={{ width: "100%", mt: 1 }}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Grid>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          해당 카테고리에 상품이 없습니다.
        </p>
      )}
    </>
  );
}
