import { formatRupiah } from "@/lib/utils";
import { Button } from "../ui/Button";
import { featuredProducts } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

export default function Collection() {
  const products = featuredProducts.slice(0, 4);
  
  return (
    <section id="collection" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-3xl font-bold text-primary">Curated Goods</h2>
        <Link href="/products">
          <Button variant="ghost">View All Products &rarr;</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p, i) => (
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
    </section>
  );
}