"use client"; // සේවාදායක පාර්ශවයේ ක්‍රියාත්මක වන බව

import Link from "next/link"; // පිටු අතර යාමට ලින්ක් භාවිතය
import { useCart } from "@/context/CartContext"; // Cart context එක භාවිතය

const Navbar = () => {
  const { cartCount } = useCart(); // කරත්තයේ ඇති අයිතම ගණන ලබා ගැනීම

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* වෙබ් අඩවියේ නම සහ ප්‍රධාන පිටුවට ලින්ක් එක */}
        <Link href="/" className="text-2xl font-bold text-green-600">
          ModernShop
        </Link>
        <div className="flex gap-6 items-center">
          {/* ප්‍රධාන පිටුවට ලින්ක් එක */}
          <Link href="/" className="hover:text-green-500 transition">
            Home
          </Link>
          {/* කරත්ත පිටුවට ලින්ක් එක */}
          <Link href="/cart" className="relative hover:text-green-500 transition">
            Cart
            {/* කරත්තයේ අයිතම තිබේ නම් ඒවායේ ගණන පෙන්වන ලකුණ */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
