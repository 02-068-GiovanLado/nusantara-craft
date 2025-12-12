export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Tenun Pouch Collection",
    category: "Accessories",
    price: 125000,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=800&fit=crop",
    description: "Koleksi pouch dengan motif tenun tradisional Nusantara yang elegan",
    featured: true,
  },
  {
    id: "2",
    name: "Heritage Hand Bag",
    category: "Bags",
    price: 450000,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&h=800&fit=crop",
    description: "Tas tangan mewah dengan detail tenun emas yang memukau",
    featured: true,
  },
  {
    id: "3",
    name: "Traditional Storage Box",
    category: "Home Decor",
    price: 175000,
    image: "https://images.unsplash.com/photo-1595726566821-a9d9994c63f8?w=800&h=800&fit=crop",
    description: "Kotak penyimpanan cantik dengan hiasan motif tradisional",
    featured: false,
  },
  {
    id: "4",
    name: "Tenun Vest - Blue",
    category: "Apparel",
    price: 325000,
    image: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=800&h=800&fit=crop",
    description: "Rompi dengan motif tenun biru yang modern dan stylish",
    featured: true,
  },
  {
    id: "5",
    name: "Tenun Vest - Red Stripe",
    category: "Apparel",
    price: 325000,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=800&fit=crop",
    description: "Rompi tenun dengan motif garis merah yang striking",
    featured: false,
  },
  {
    id: "6",
    name: "Canvas Tote with Tenun Detail",
    category: "Bags",
    price: 275000,
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&h=800&fit=crop",
    description: "Tas kanvas dengan panel tenun tradisional yang unik",
    featured: true,
  },
  {
    id: "7",
    name: "Mini Crossbody Tenun",
    category: "Bags",
    price: 185000,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=800&fit=crop",
    description: "Tas selempang mini dengan motif tenun yang praktis",
    featured: false,
  },
  {
    id: "8",
    name: "Drawstring Bag Tenun",
    category: "Bags",
    price: 225000,
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&h=800&fit=crop",
    description: "Tas serut dengan motif tenun tradisional yang colorful",
    featured: false,
  },
  {
    id: "9",
    name: "Traditional Tenun Scarf",
    category: "Accessories",
    price: 295000,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&h=800&fit=crop",
    description: "Selendang tenun tradisional dengan detail emas yang mewah",
    featured: true,
  },
  {
    id: "10",
    name: "Decorative Head Cover",
    category: "Home Decor",
    price: 145000,
    image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=800&h=800&fit=crop",
    description: "Tutup kepala dengan motif tradisional yang artistik",
    featured: false,
  },
];

export const categories = [
  {
    id: "bags",
    name: "Bags",
    count: products.filter((p) => p.category === "Bags").length,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&h=800&fit=crop",
  },
  {
    id: "apparel",
    name: "Apparel",
    count: products.filter((p) => p.category === "Apparel").length,
    image: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=800&h=800&fit=crop",
  },
  {
    id: "accessories",
    name: "Accessories",
    count: products.filter((p) => p.category === "Accessories").length,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=800&fit=crop",
  },
  {
    id: "home-decor",
    name: "Home Decor",
    count: products.filter((p) => p.category === "Home Decor").length,
    image: "https://images.unsplash.com/photo-1595726566821-a9d9994c63f8?w=800&h=800&fit=crop",
  },
];

export const featuredProducts = products.filter((p) => p.featured);
