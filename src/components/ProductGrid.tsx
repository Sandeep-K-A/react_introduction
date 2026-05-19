import type { Product } from "../types/product";
import ProductCard from "./ProductCard";

type ProductGridProps = {
  products: Product[];
};
const ProductGrid = ({ products }: ProductGridProps) => {
  if (!products.length) {
    return (
      <div className="flex items-center justify-center py-10">
        <p className="text-gray-500">No Products found.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
