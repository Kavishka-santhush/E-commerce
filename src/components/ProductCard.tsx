"use client"; // සේවාදායක පාර්ශවයේ ක්‍රියාත්මක වන බව

import React from "react";
import Image from "next/image"; // රූප පෙන්වීම සඳහා Next.js සංරචකය
import { Product } from "@/types"; // Product වර්ගය
import { useCart } from "@/context/CartContext"; // Cart context එක භාවිතය

interface ProductCardProps {
  product: Product; // භාණ්ඩයේ දත්ත
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart(); // කරත්තයට එකතු කිරීමේ ශ්‍රිතය ලබා ගැනීම

  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64 w-full">
        {/* භාණ්ඩයේ රූපය */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        {/* භාණ්ඩයේ නම */}
        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
        {/* භාණ්ඩය අයත් වන ප්‍රභේදය */}
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        <div className="flex justify-between items-center mt-4">
          {/* භාණ්ඩයේ මිල */}
          <span className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
          {/* කරත්තයට එකතු කිරීමේ බොත්තම */}
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
