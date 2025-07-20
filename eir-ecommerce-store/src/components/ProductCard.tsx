import React from 'react';
import { useCart } from '../context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="border rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
      <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-xl font-bold mt-2">${product.price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;