"use client"; // සේවාදායක පාර්ශවයේ ක්‍රියාත්මක වන බව

import { useEffect, useState } from "react"; // React hooks ආනයනය කිරීම
import { Product } from "@/types"; // Product වර්ගය ආනයනය කිරීම
import ProductCard from "@/components/ProductCard"; // ProductCard සංරචකය ආනයනය කිරීම

export default function Home() { // ප්‍රධාන පිටුවේ ශ්‍රිතය
  const [products, setProducts] = useState<Product[]>([]); // භාණ්ඩ ලැයිස්තුව සඳහා ස්ටේට් එක
  const [loading, setLoading] = useState(true); // පූරණය වීමේ ස්ටේට් එක

  useEffect(() => { // පිටුව පූරණය වන විට ක්‍රියාත්මක වන හූක් එක
    const fetchProducts = async () => { // දත්ත ලබා ගැනීමේ ශ්‍රිතය
      try { // දෝෂ හැසිරවීම සඳහා
        const response = await fetch("/api/products"); // API එකට ඉල්ලීමක් යැවීම
        const data = await response.json(); // ප්‍රතිචාරය JSON බවට පත් කිරීම
        setProducts(data); // දත්ත ස්ටේට් එකට ඇතුළත් කිරීම
        setLoading(false); // පූරණය අවසන් බව දැන්වීම
      } catch (error) { // දෝෂයක් ඇති වුවහොත්
        console.error("Error fetching products:", error); // දෝෂය පෙන්වීම
        setLoading(false); // පූරණය නතර කිරීම
      }
    }; // ශ්‍රිතය අවසානය

    fetchProducts(); // ශ්‍රිතය ඇමතීම
  }, []); // එක් වරක් පමණක් ක්‍රියාත්මක වීම

  if (loading) { // පූරණය වන්නේ නම්
    return ( // ආපසු යැවීම
      <div className="flex justify-center items-center h-64"> {/* මධ්‍යගත කිරීම */}
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div> {/* කැරකෙන ලකුණ */}
      </div> // අවසානය
    ); // අවසානය
  } // අවසානය

  return ( // අතුරුමුහුණත ආපසු යැවීම
    <div> {/* ප්‍රධාන කොටුව */}
      <h1 className="text-3xl font-bold mb-8 text-center">Featured Products</h1> {/* ශීර්ෂය */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* භාණ්ඩ පෙන්වන ජාලය */}
        {products.map((product) => ( // භාණ්ඩ ලැයිස්තුව හරහා යාම
          <ProductCard key={product.id} product={product} /> // එක් එක් භාණ්ඩය සඳහා කාඩ්පතක්
        ))} {/* මැප් අවසානය */}
      </div> {/* ජාලය අවසානය */}
    </div> // කොටුව අවසානය
  ); // අවසානය
} // ශ්‍රිතය අවසානය
