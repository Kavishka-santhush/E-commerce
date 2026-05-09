import { NextResponse } from "next/server"; // Next.js ප්‍රතිචාර හැසිරවීමට අවශ්‍ය මොඩියුලය ආනයනය කිරීම
import { products } from "@/data/products"; // භාණ්ඩ දත්ත ආනයනය කිරීම

// GET ඉල්ලීමක් ලැබුණු විට සියලුම භාණ්ඩ ලබා දෙන ශ්‍රිතය
export async function GET() {
  // භාණ්ඩ ලැයිස්තුව JSON ආකාරයෙන් සහ HTTP 200 තත්ත්වය සමඟ ආපසු යැවීම
  return NextResponse.json(products, { status: 200 });
}
