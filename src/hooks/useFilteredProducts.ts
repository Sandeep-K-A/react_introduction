import { useState, useMemo } from "react";

import type { Product } from "../types/product";
import type { SortOption } from "../types/filter";

const useFilteredProducts = (products: Product[]) => {
  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [sort, setSort] = useState<SortOption>("default");

  const categories = useMemo(() => {
    return ["All", ...new Set(products.map((product) => product.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = products;

    //search
    if (search.trim()) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    //Category
    if (selectedCategory !== "All") {
      result = result.filter(
        (product) => product.category === selectedCategory,
      );
    }

    //sort
    switch (sort) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "rating-desc":
        result = [...result].sort((a, b) => b.rating.rate - a.rating.rate);
        break;
    }
    return result;
  }, [products, search, selectedCategory, sort]);

  return {
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    sort,
    setSort,
    categories,
    filteredProducts,
  };
};

export default useFilteredProducts;
