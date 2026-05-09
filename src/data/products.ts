import { Product } from "../types"; // Product වර්ගය ආනයනය කිරීම

// විකිණීමට ඇති භාණ්ඩ ලැයිස්තුව (Mock Data)
export const products: Product[] = [
  {
    id: 1,
    name: "Modern T-Shirt",
    price: 25.0,
    description: "A comfortable and stylish modern T-shirt made from 100% cotton.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Clothing",
  },
  {
    id: 2,
    name: "Classic Denim Jeans",
    price: 50.0,
    description: "Durable and classic denim jeans that never go out of style.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Clothing",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 120.0,
    description: "High-quality wireless headphones with noise cancellation.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 199.0,
    description: "A sleek smart watch with various health tracking features.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Electronics",
  },
  {
    id: 5,
    name: "Leather Backpack",
    price: 85.0,
    description: "Handcrafted leather backpack, perfect for daily use and travel.",
    image: "https://images.unsplash.com/photo-1548036654-3d9670001712?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Accessories",
  },
  {
    id: 6,
    name: "Canvas Sneakers",
    price: 45.0,
    description: "Lightweight and breathable canvas sneakers for everyday comfort.",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Footwear",
  },
];
