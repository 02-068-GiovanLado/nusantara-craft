# 🔥 Setup Supabase untuk Nusantara Craft

## 1️⃣ Buat Project Supabase

1. Buka [supabase.com](https://supabase.com)
2. Sign up / Login
3. Klik "New Project"
4. Isi:
   - **Name:** Nusantara Craft
   - **Database Password:** (buat password kuat)
   - **Region:** Southeast Asia (Singapore)
5. Klik "Create new project" (tunggu ~2 menit)

## 2️⃣ Dapatkan API Keys

1. Di dashboard Supabase, klik **Settings** (⚙️)
2. Klik **API**
3. Copy:
   - **Project URL** 
   - **anon/public key**

## 3️⃣ Setup Environment Variables

1. Buat file `.env.local` di root project:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

2. **JANGAN** commit file ini ke Git (sudah ada di .gitignore)

## 4️⃣ Buat Table Products

1. Di Supabase Dashboard, klik **SQL Editor**
2. Klik "New Query"
3. Copy-paste SQL ini:

```sql
-- Create products table
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  price INTEGER NOT NULL,
  image TEXT NOT NULL,
  description TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create index for faster queries
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_featured ON products(featured);

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public to read products
CREATE POLICY "Public can read products"
  ON products FOR SELECT
  TO public
  USING (true);

-- Insert sample products
INSERT INTO products (name, category, price, image, description, featured) VALUES
('Tenun Pouch Collection', 'Accessories', 125000, 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=800&fit=crop', 'Koleksi pouch dengan motif tenun tradisional Nusantara yang elegan', true),
('Heritage Hand Bag', 'Bags', 450000, 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&h=800&fit=crop', 'Tas tangan mewah dengan detail tenun emas yang memukau', true),
('Traditional Storage Box', 'Home Decor', 175000, 'https://images.unsplash.com/photo-1595726566821-a9d9994c63f8?w=800&h=800&fit=crop', 'Kotak penyimpanan cantik dengan hiasan motif tradisional', false),
('Tenun Vest - Blue', 'Apparel', 325000, 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=800&h=800&fit=crop', 'Rompi dengan motif tenun biru yang modern dan stylish', true),
('Tenun Vest - Red Stripe', 'Apparel', 325000, 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=800&fit=crop', 'Rompi tenun dengan motif garis merah yang striking', false),
('Canvas Tote with Tenun Detail', 'Bags', 275000, 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&h=800&fit=crop', 'Tas kanvas dengan panel tenun tradisional yang unik', true),
('Mini Crossbody Tenun', 'Bags', 185000, 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=800&fit=crop', 'Tas selempang mini dengan motif tenun yang praktis', false),
('Drawstring Bag Tenun', 'Bags', 225000, 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&h=800&fit=crop', 'Tas serut dengan motif tenun tradisional yang colorful', false),
('Traditional Tenun Scarf', 'Accessories', 295000, 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&h=800&fit=crop', 'Selendang tenun tradisional dengan detail emas yang mewah', true),
('Decorative Head Cover', 'Home Decor', 145000, 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=800&h=800&fit=crop', 'Tutup kepala dengan motif tradisional yang artistik', false);
```

4. Klik **Run** (atau F5)
5. Cek tab **Table Editor** → Anda akan lihat 10 produk!

## 5️⃣ Restart Dev Server

```bash
npm run dev
```

## ✅ Selesai!

Sekarang website Anda menggunakan Supabase sebagai database!

### 🎯 Cara Manage Produk:

**Via Supabase Dashboard:**
1. Buka **Table Editor** di Supabase
2. Klik table `products`
3. Klik "Insert row" untuk tambah produk
4. Edit/Delete langsung dari UI
5. Refresh website → Produk otomatis update!

**Via SQL Editor:**
```sql
-- Tambah produk baru
INSERT INTO products (name, category, price, image, description, featured)
VALUES ('Produk Baru', 'Bags', 300000, 'https://...', 'Deskripsi', true);

-- Update produk
UPDATE products SET price = 350000 WHERE name = 'Produk Baru';

-- Hapus produk
DELETE FROM products WHERE name = 'Produk Lama';
```

### 🔐 Security (Optional):

Jika ingin admin bisa edit/delete:
1. Setup Supabase Auth
2. Update RLS policies
3. Buat admin dashboard

Butuh bantuan setup admin dashboard? 🚀
