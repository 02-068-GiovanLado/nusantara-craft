"use client";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth";
import { Package, Home, LogOut } from "lucide-react";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    document.cookie = "sb-access-token=; path=/; max-age=0";
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
          {/* Sidebar */}
          <aside className="fixed left-0 top-0 h-full w-64 bg-primary text-white p-6 z-50">
            <div className="mb-8">
              <h1 className="text-2xl font-bold">RAKATA</h1>
              <p className="text-sm text-gray-300">Admin Dashboard</p>
            </div>

            <nav className="space-y-2">
              <Link
                href="/admin"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Home className="w-5 h-5" />
                <span>Dashboard</span>
              </Link>
              <Link
                href="/admin/products"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Package className="w-5 h-5" />
                <span>Products</span>
              </Link>
            </nav>

            <button
              onClick={handleLogout}
              className="absolute bottom-6 left-6 right-6 flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-left w-[calc(100%-3rem)]"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </aside>

          {/* Main Content */}
          <main className="ml-64 p-8">{children}</main>
        </div>
  );
}
