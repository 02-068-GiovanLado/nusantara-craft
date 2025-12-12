"use client";
import { formatRupiah } from "@/lib/utils";
import { Button } from "../ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getFeaturedProducts } from "@/lib/products";
import type { Product } from "@/lib/supabase";

export default function Collection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const data = await getFeaturedProducts();
      setProducts(data.slice(0, 4));
      setLoading(false);
    }
    loadProducts();
  }, []);

  return (
    <section id="collection" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-3xl font-bold text-primary">Curated Goods</h2>
        <Link href="/products">
          <Button variant="ghost">View All Products &rarr;</Button>
        </Link>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-4/5 bg-gray-200 rounded-2xl mb-4" />
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-3 bg-gray-200 rounded w-1/2" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <div key={p.id} className="group cursor-pointer">
              <div className="relative aspect-4/5 bg-gray-100 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold text-lg text-primary">{p.name}</h3>
              <p className="text-sm text-secondary mb-2">{p.category}</p>
              <p className="font-medium text-primary">{formatRupiah(p.price)}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
