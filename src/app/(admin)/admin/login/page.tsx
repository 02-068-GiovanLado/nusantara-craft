"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmail } from "@/lib/auth";
import { Button } from "@/components/ui/Button";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error } = await signInWithEmail(email, password);

    if (error) {
      setError(error.message);
      setLoading(false);
    } else if (data.session) {
      // Set cookie and redirect
      document.cookie = `sb-access-token=${data.session.access_token}; path=/; max-age=3600`;
      router.push("/admin");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">RAKATA Admin</h1>
          <p className="text-secondary">Login untuk manage produk</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                placeholder="admin@rakata.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              ← Kembali ke Website
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-secondary bg-blue-50 border border-blue-200 rounded-lg p-4">
          <strong>Setup Supabase Auth dulu:</strong><br/>
          1. Di Supabase: Authentication → Users<br/>
          2. Add User → Masukkan email & password<br/>
          3. Login dengan credentials tersebut
        </div>
      </div>
    </div>
  );
}
