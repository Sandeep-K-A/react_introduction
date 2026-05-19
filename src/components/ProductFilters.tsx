import type { SortOption } from "../types/filter";

type ProductFiltersProps = {
  search: string;
  onSearch: (value: string) => void;

  categories: string[];

  selectedCategory: string;
  onCategory: (value: string) => void;

  sort: SortOption;
  onSort: (value: SortOption) => void;
};

const ProductFilters = ({
  search,
  onSearch,
  categories,
  selectedCategory,
  onCategory,
  sort,
  onSort,
}: ProductFiltersProps) => {
  return (
    <div className="mb-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="grid grid-cols-1 gap-3 mg:grid-cols-3">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-black"
        />

        <select
          value={selectedCategory}
          onChange={(e) => onCategory(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-black"
        >
          <option value="All">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => onSort(e.target.value as SortOption)}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-black"
        >
          <option value="Default">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Top Rated</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilters;
