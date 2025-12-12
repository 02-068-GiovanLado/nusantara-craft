"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewProductPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "Bags",
    price: "",
    image: "",
    description: "",
    featured: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.from("products").insert([
      {
        name: formData.name,
        category: formData.category,
        price: parseInt(formData.price),
        image: formData.image,
        description: formData.description,
        featured: formData.featured,
      },
    ]);

    if (error) {
      alert("Error: " + error.message);
      setLoading(false);
    } else {
      alert("Produk berhasil ditambahkan!");
      router.push("/admin/products");
    }
  };

  return (
    <div>
      <Link
        href="/admin/products"
        className="inline-flex items-center gap-2 text-secondary hover:text-primary mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Products
      </Link>

      <h1 className="text-3xl font-bold text-primary mb-8">Add New Product</h1>

      <div className="bg-white rounded-xl shadow-sm p-8 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Product Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
              placeholder="Tas Tenun Premium"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Category *
            </label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
              required
            >
              <option value="Bags">Bags</option>
              <option value="Apparel">Apparel</option>
              <option value="Accessories">Accessories</option>
              <option value="Home Decor">Home Decor</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Price (Rp) *
            </label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
              placeholder="250000"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Image URL *
            </label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
              placeholder="https://images.unsplash.com/..."
              required
            />
            <p className="mt-2 text-sm text-secondary">
              Upload foto ke Unsplash/Imgur atau pakai Supabase Storage
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
              rows={4}
              placeholder="Deskripsi produk..."
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) =>
                setFormData({ ...formData, featured: e.target.checked })
              }
              className="w-5 h-5 text-accent rounded focus:ring-accent"
            />
            <label htmlFor="featured" className="text-sm font-medium text-primary">
              Featured Product (tampil di homepage)
            </label>
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" disabled={loading} className="flex-1">
              {loading ? "Saving..." : "Add Product"}
            </Button>
            <Link href="/admin/products" className="flex-1">
              <Button type="button" variant="outline" className="w-full">
                Cancel
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
