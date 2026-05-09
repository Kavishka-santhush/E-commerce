// භාණ්ඩයක (Product) ව්‍යුහය නිර්වචනය කිරීම
export interface Product {
  id: number; // භාණ්ඩයේ අන්න්‍ය හඳුනාගැනීමේ අංකය
  name: string; // භාණ්ඩයේ නම
  price: number; // භාණ්ඩයේ මිල
  description: string; // භාණ්ඩය පිළිබඳ විස්තරය
  image: string; // භාණ්ඩයේ රූපයේ මාවත
  category: string; // භාණ්ඩය අයත් වන ප්‍රභේදය
}

// කරත්තයේ (Cart) ඇති අයිතමයක ව්‍යුහය නිර්වචනය කිරීම
export interface CartItem extends Product {
  quantity: number; // මිලදී ගැනීමට බලාපොරොත්තු වන ප්‍රමාණය
}
