import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import ProductFilters from "./components/ProductFilters";

import useProducts from "./hooks/useProducts";
import useFilteredProducts from "./hooks/useFilteredProducts";

function App() {
  //Fetch Products
  const { products, loading, error } = useProducts();

  //Filter + Sort Products
  const {
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    sort,
    setSort,
    categories,
    filteredProducts,
  } = useFilteredProducts(products);

  //loading UI
  if (loading) {
    return <p className="py-10 text-center text-lg">Loading Products...</p>;
  }

  //error UI
  if (error) {
    return <p className="py-10 text-center text-red-500">{error}</p>;
  }
  return (
    <>
      {/* NavBar */}
      <Navbar />

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-6">
        {/* Filters */}
        <ProductFilters
          search={search}
          onSearch={setSearch}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategory={setSelectedCategory}
          sort={sort}
          onSort={setSort}
        />

        <div className="flex mb-5 justify-between">
          <h1 className="text-2xl font-bold">Products</h1>
          <span className="text-sm text-gray-500">
            {filteredProducts.length} items
          </span>
        </div>

        {/* ProductGrid */}
        <ProductGrid products={filteredProducts} />
      </main>
      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ShopyMart. All rights reserved.
      </footer>
    </>
  );
}

export default App;
