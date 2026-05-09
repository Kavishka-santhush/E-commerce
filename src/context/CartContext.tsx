"use client"; // සේවාදායක පාර්ශවයේ ක්‍රියාත්මක වන බව

import React, { createContext, useContext, useState } from "react"; // React අවශ්‍යතා ආනයනය කිරීම
import { CartItem, Product } from "@/types"; // වර්ග ආනයනය කිරීම

// Cart Context එක සඳහා අවශ්‍ය අගයන් සහ ශ්‍රිතයන් නිර්වචනය කිරීම
interface CartContextType { // ඉන්ටර්ෆේස් එක
  cart: CartItem[]; // කරත්තයේ අයිතම
  addToCart: (product: Product) => void; // එකතු කරන ශ්‍රිතය
  removeFromCart: (productId: number) => void; // ඉවත් කරන ශ්‍රිතය
  clearCart: () => void; // හිස් කරන ශ්‍රිතය
  cartTotal: number; // මුළු එකතුව
  cartCount: number; // අයිතම ගණන
} // අවසානය

// Cart Context එක නිර්මාණය කිරීම
const CartContext = createContext<CartContextType | undefined>(undefined); // කොන්ටෙක්ස්ට් එක

// Cart Provider එක නිර්මාණය කිරීම
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => { // ප්‍රොවයිඩර් ශ්‍රිතය
  const [cart, setCart] = useState<CartItem[]>([]); // කරත්තයේ ස්ටේට් එක

  const addToCart = (product: Product) => { // එකතු කිරීමේ ශ්‍රිතය
    setCart((prevCart) => { // පෙර කරත්තය අනුව වෙනස් කිරීම
      const existingItem = prevCart.find((item) => item.id === product.id); // දැනට තිබේදැයි බැලීම
      if (existingItem) { // තිබේ නම්
        return prevCart.map((item) => // ලැයිස්තුව මැප් කිරීම
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item // ප්‍රමාණය වැඩි කිරීම
        ); // අවසානය
      } // අවසානය
      return [...prevCart, { ...product, quantity: 1 }]; // අලුත් අයිතමයක් ලෙස එක් කිරීම
    }); // අවසානය
  }; // අවසානය

  const removeFromCart = (productId: number) => { // ඉවත් කිරීමේ ශ්‍රිතය
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId)); // අදාළ අයිතමය ඉවත් කිරීම
  }; // අවසානය

  const clearCart = () => { // හිස් කිරීමේ ශ්‍රිතය
    setCart([]); // හිස් ලැයිස්තුවක් සැකසීම
  }; // අවසානය

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0); // මුළු මිල ගණනය

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0); // අයිතම ගණන ගණනය

  return ( // අගයන් ලබා දීම
    <CartContext.Provider // කොන්ටෙක්ස්ට් ප්‍රොවයිඩර්
      value={{ cart, addToCart, removeFromCart, clearCart, cartTotal, cartCount }} // අගයන්
    > {/* ආරම්භය */}
      {children} {/* දරුවන් */}
    </CartContext.Provider> // අවසානය
  ); // අවසානය
}; // අවසානය

export const useCart = () => { // කස්ටම් හූක් එක
  const context = useContext(CartContext); // කොන්ටෙක්ස්ට් එක ලබා ගැනීම
  if (context === undefined) { // නොමැති නම්
    throw new Error("useCart must be used within a CartProvider"); // දෝෂයක් පෙන්වීම
  } // අවසානය
  return context; // කොන්ටෙක්ස්ට් එක ආපසු යැවීම
}; // අවසානය
