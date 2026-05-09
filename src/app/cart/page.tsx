"use client"; // සේවාදායක පාර්ශවයේ ක්‍රියාත්මක වන බව

import React from "react";
import Image from "next/image"; // රූප පෙන්වීමට
import Link from "next/link"; // පිටු අතර යාමට
import { useCart } from "@/context/CartContext"; // Cart context එක භාවිතය

const CartPage = () => {
  const { cart, removeFromCart, cartTotal, clearCart } = useCart(); // අවශ්‍ය දත්ත ලබා ගැනීම

  // කරත්තය හිස් නම් පෙන්වන පණිවිඩය
  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Go back and add some products to your cart!</p>
        <Link href="/" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* කරත්තයේ ඇති අයිතම ලැයිස්තුව */}
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center border-b pb-6 last:border-0 last:pb-0">
              <div className="relative h-24 w-24 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="ml-6 flex-grow">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.category}</p>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-700">Qty: {item.quantity}</span>
                    <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                  {/* අයිතමයක් ඉවත් කිරීමේ බොත්තම */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* මිල ගණන් වල සාරාංශය */}
        <div className="mt-8 border-t pt-6">
          <div className="flex justify-between text-xl font-bold mb-6">
            <span>Total:</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* කරත්තය හිස් කරන බොත්තම */}
            <button
              onClick={clearCart}
              className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
            >
              Clear Cart
            </button>
            {/* ඇණවුම සම්පූර්ණ කිරීමේ බොත්තම (Checkout) */}
            <button
              className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
              onClick={() => alert("Checkout functionality would be implemented here!")}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
