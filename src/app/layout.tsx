import type { Metadata } from "next"; // මෙටාඩේටා වර්ගය ආනයනය කිරීම
import { Geist, Geist_Mono } from "next/font/google"; // Google fonts ආනයනය කිරීම
import "./globals.css"; // ගෝලීය CSS ගොනුව ආනයනය කිරීම
import { CartProvider } from "@/context/CartContext"; // CartProvider ආනයනය කිරීම
import Navbar from "@/components/Navbar"; // Navbar ආනයනය කිරීම

// Geist Sans ෆොන්ට් එක සැකසීම
const geistSans = Geist({
  variable: "--font-geist-sans", // CSS වේරියබල් එක
  subsets: ["latin"], // භාෂා කාණ්ඩය
});

// Geist Mono ෆොන්ට් එක සැකසීම
const geistMono = Geist_Mono({
  variable: "--font-geist-mono", // CSS වේරියබල් එක
  subsets: ["latin"], // භාෂා කාණ්ඩය
});

// වෙබ් අඩවියේ මෙටාඩේටා සැකසීම
export const metadata: Metadata = {
  title: "Modern E-commerce App", // වෙබ් අඩවියේ නම
  description: "A modern full stack E-commerce application", // වෙබ් අඩවියේ විස්තරය
};

// ප්‍රධාන ලේඅවුට් එක
export default function RootLayout({
  children, // අභ්‍යන්තර සංරචක
}: Readonly<{
  children: React.ReactNode; // දරුවන්ගේ වර්ගය
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}> {/* HTML ටැගය */}
      <body className="bg-gray-50 min-h-screen flex flex-col"> {/* ශරීර ටැගය */}
        <CartProvider> {/* කරත්ත දත්ත සැපයුම්කරු */}
          <Navbar /> {/* සංචාලන තීරුව */}
          <main className="flex-grow container mx-auto px-4 py-8"> {/* ප්‍රධාන අන්තර්ගත ප්‍රදේශය */}
            {children} {/* පිටු වල අන්තර්ගතය */}
          </main> {/* ප්‍රධාන අවසානය */}
          <footer className="bg-white border-t py-6 mt-12 text-center text-gray-500"> {/* පාදකය */}
            <p>© {new Date().getFullYear()} ModernShop. All rights reserved.</p> {/* හිමිකම් පණිවිඩය */}
          </footer> {/* පාදක අවසානය */}
        </CartProvider> {/* සැපයුම්කරු අවසානය */}
      </body> {/* ශරීර අවසානය */}
    </html> {/* HTML අවසානය */}
  );
}
