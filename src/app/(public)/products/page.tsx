import { getProducts } from "@/lib/products";
import { formatRupiah } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default async function ProductsPage() {
  const products = await getProducts();
  
  return (
    <main className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          All Products
        </h1>
        <p className="text-lg text-secondary max-w-2xl">
          Koleksi lengkap produk heritage Nusantara Craft. Tas, apparel, dan aksesori dengan sentuhan tradisional.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-4/5 bg-gray-100 rounded-2xl overflow-hidden mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-bold text-lg text-primary">{product.name}</h3>
            <p className="text-sm text-secondary mb-2">{product.category}</p>
            <p className="font-medium text-primary">{formatRupiah(product.price)}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link href="/#collection">
          <Button variant="outline" size="lg">
            ← Back to Home
          </Button>
        </Link>
      </div>
    </main>
  );
}
