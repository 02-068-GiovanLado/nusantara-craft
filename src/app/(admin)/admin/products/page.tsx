"use client";
import { useEffect, useState } from "react";
import { getProducts } from "@/lib/products";
import { supabase } from "@/lib/supabase";
import type { Product } from "@/lib/supabase";
import { formatRupiah } from "@/lib/utils";
import { Pencil, Trash2, Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const data = await getProducts();
    setProducts(data);
    setLoading(false);
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Hapus produk "${name}"?`)) return;

    const { error } = await supabase.from("products").delete().eq("id", id);

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Produk berhasil dihapus!");
      loadProducts();
    }
  }

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-primary mb-2">Products</h1>
          <p className="text-secondary">{products.length} total products</p>
        </div>
        <Link href="/admin/products/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Button>
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-primary">
                Image
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-primary">
                Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-primary">
                Category
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-primary">
                Price
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-primary">
                Featured
              </th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-primary">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-medium text-primary">{product.name}</div>
                  <div className="text-sm text-secondary line-clamp-1">
                    {product.description}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-secondary">
                  {product.category}
                </td>
                <td className="px-6 py-4 font-medium text-primary">
                  {formatRupiah(product.price)}
                </td>
                <td className="px-6 py-4">
                  {product.featured ? (
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">
                      Yes
                    </span>
                  ) : (
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">
                      No
                    </span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <Link href={`/admin/products/edit/${product.id}`}>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Pencil className="w-4 h-4 text-accent" />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(product.id, product.name)}
                      className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
