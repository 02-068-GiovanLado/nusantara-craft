"use client";
import { useEffect, useState } from "react";
import { getProducts, getCategoryCounts } from "@/lib/products";
import { Package, ShoppingBag, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    categories: {} as Record<string, number>,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      const products = await getProducts();
      const counts = await getCategoryCounts();
      setStats({
        totalProducts: products.length,
        categories: counts,
      });
      setLoading(false);
    }
    loadStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-secondary">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Dashboard</h1>
        <p className="text-secondary">Selamat datang di admin panel Rakata</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Package className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-secondary">Total Products</p>
              <p className="text-2xl font-bold text-primary">
                {stats.totalProducts}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <ShoppingBag className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-secondary">Categories</p>
              <p className="text-2xl font-bold text-primary">4</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-secondary">Featured</p>
              <p className="text-2xl font-bold text-primary">
                {Object.values(stats.categories).reduce((a, b) => a + b, 0)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Breakdown */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-primary mb-4">
          Products by Category
        </h2>
        <div className="space-y-3">
          {Object.entries(stats.categories).map(([name, count]) => (
            <div key={name} className="flex items-center justify-between">
              <span className="text-secondary">{name}</span>
              <span className="font-semibold text-primary">{count} products</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-primary mb-4">Quick Actions</h2>
        <div className="flex gap-4">
          <Link href="/admin/products/new">
            <Button>+ Add New Product</Button>
          </Link>
          <Link href="/admin/products">
            <Button variant="outline">View All Products</Button>
          </Link>
          <Link href="/">
            <Button variant="outline">View Website</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
