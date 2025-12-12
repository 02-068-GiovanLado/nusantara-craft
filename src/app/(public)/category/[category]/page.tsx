import { getProductsByCategory } from "@/lib/products";
import { formatRupiah } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { notFound } from "next/navigation";

const categoryNames: Record<string, string> = {
  bags: "Bags",
  apparel: "Apparel",
  accessories: "Accessories",
  "home-decor": "Home Decor",
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const categoryName = categoryNames[category];
  
  if (!categoryName) {
    notFound();
  }

  const categoryProducts = await getProductsByCategory(categoryName);

  return (
    <main className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {categoryName}
        </h1>
        <p className="text-lg text-secondary max-w-2xl">
          {categoryProducts.length} produk dalam kategori {categoryName}
        </p>
      </div>

      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoryProducts.map((product) => (
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
              <p className="font-medium text-primary">
                {formatRupiah(product.price)}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-secondary text-lg">
            Belum ada produk dalam kategori ini
          </p>
        </div>
      )}

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
