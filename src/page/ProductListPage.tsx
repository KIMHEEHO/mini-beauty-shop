import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import type { Product, TabValue } from "../component/types.js";
import ProductItem from "../component/ProductItem.js";
import { CategoryTab } from "../component/CategoryTab.js";
import { SearchComponent } from "../component/SearchComponent.js";
import { http } from "msw/core/http";

export default function ProductList() {
  const [tab, setTab] = useState<TabValue>("lifting");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/get_product")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setAllProducts(data);
      });
  }, []);

  // 디바운싱 적용 : 검색이 완료된 후 1초 뒤에 검색어가 반영됨
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 1000);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  const filteredProducts = allProducts.filter((item) => {
    const matchesCategory = item.category === tab;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(debouncedQuery.toLowerCase());
    return debouncedQuery === "" ? matchesCategory : matchesSearch;
  });

  return (
    <>
      <SearchComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <CategoryTab currentTab={tab} changeTab={setTab} />
      {filteredProducts.length > 0 ? (
        <Grid container spacing={3} sx={{ width: "100%", mt: 1 }}>
          {filteredProducts.map((product) => (
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
