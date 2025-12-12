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
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "Bags",
    price: "",
    image: "",
    description: "",
    featured: false,
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("File harus berupa gambar");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Ukuran file maksimal 5MB");
      return;
    }

    setUploading(true);

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `poducts/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("poducts")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from("poducts")
        .getPublicUrl(filePath);

      setFormData({ ...formData, image: data.publicUrl });
      alert("Gambar berhasil diupload!");
    } catch (error: any) {
      console.error("Error uploading image:", error);
      alert("Gagal upload gambar: " + error.message);
    } finally {
      setUploading(false);
    }
  };

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
              Product Image *
            </label>
            
            {/* Upload dari laptop */}
            <div className="mb-4">
              <label className="block">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="hidden"
                  id="image-upload"
                />
                <div className="px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-accent transition-colors text-center">
                  {uploading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-accent"></div>
                      <span className="text-sm text-secondary">Uploading...</span>
                    </div>
                  ) : (
                    <div>
                      <p className="text-sm font-medium text-primary">
                        📁 Upload gambar dari laptop
                      </p>
                      <p className="text-xs text-secondary mt-1">
                        Klik untuk pilih file (max 5MB)
                      </p>
                    </div>
                  )}
                </div>
              </label>
            </div>

            {/* Atau pakai URL */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-xs text-secondary">atau pakai URL</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            
            <input
              type="url"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
              placeholder="https://images.unsplash.com/..."
            />
            
            {formData.image && (
              <div className="mt-4">
                <p className="text-xs text-secondary mb-2">Preview:</p>
                <img
                  src={formData.image}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-lg border"
                />
              </div>
            )}
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
