import Button from "./ui/Button";
import type { Product } from "../types/product";

import toast from "react-hot-toast";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const stars =
    "★".repeat(Math.round(product.rating.rate)) +
    "☆".repeat(5 - Math.round(product.rating.rate));

  const handleAddToCart = () => {
    toast.success(`${product.title.slice(0, 20)}...added`);
    console.log(`Added to cart: ${product.title}`);
  };
  return (
    <>
      <div className="w-full max-w-xs flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-200 hover:-translate-y-1 hover:shadow-xl">
        <div className="overflow-hidden h-60 w-full">
          <img
            src={product.image}
            alt="product_image"
            className="h-full w-full object-cover bg-gray-100"
          />
        </div>
        <div className="flex flex-1 flex-col p-3.5">
          <p className="mb-2 text-xs uppercase tracking-widest text-gray-500 pointer-events-none">
            {product.category}
          </p>

          <h2 className="mb-1.5 text-base font-semibold text-black pointer-events-none">
            {product.title}
          </h2>
          <p className="mb-1.5 text-lg font-bold text-red-500 pointer-events-none">
            ₹{product.price.toLocaleString()}
          </p>
          <p className="mb-3 text-sm text-[#f4a261] pointer-events-none">
            {stars}
            <span className="ml-2 text-gray-500 pointer-events-none">
              ({product.rating.rate})
            </span>
          </p>
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
