# 🔐 Admin Dashboard - Setup Guide

## ✅ Dashboard Admin Sudah Siap!

### 📁 File yang Dibuat:

```
src/
├── lib/
│   └── auth.ts                          # Auth helpers
├── middleware.ts                        # Route protection
└── app/admin/
    ├── layout.tsx                       # Admin sidebar
    ├── page.tsx                         # Dashboard overview
    ├── login/page.tsx                   # Login page
    └── products/
        ├── page.tsx                     # Product list
        └── new/page.tsx                 # Add product form
```

## 🚀 Cara Setup:

### 1. Setup Supabase Auth

1. Login ke [supabase.com](https://supabase.com)
2. Pilih project "Sagata"
3. Klik **Authentication** di sidebar
4. Klik **Users** tab
5. Klik **Add User** → **Create new user**
6. Isi:
   - **Email:** admin@sagata.com (atau email Anda)
   - **Password:** (buat password kuat, minimal 6 karakter)
   - **Auto Confirm User:** ✅ Centang ini!
7. Klik **Create User**

### 2. Update RLS Policy (Security)

Di Supabase SQL Editor, jalankan:

```sql
-- Policy: Allow authenticated users to insert products
CREATE POLICY "Authenticated users can insert products"
  ON products FOR INSERT
  TO authenticated
  USING (true);

-- Policy: Allow authenticated users to update products
CREATE POLICY "Authenticated users can update products"
  ON products FOR UPDATE
  TO authenticated
  USING (true);

-- Policy: Allow authenticated users to delete products
CREATE POLICY "Authenticated users can delete products"
  ON products FOR DELETE
  TO authenticated
  USING (true);
```

### 3. Akses Admin Dashboard

1. Buka: **http://localhost:3000/admin/login**
2. Login dengan email & password yang dibuat tadi
3. Selamat! Anda masuk ke dashboard 🎉

## 🎯 Fitur Dashboard:

### ✅ Dashboard Overview (`/admin`)
- Total produk
- Breakdown per kategori
- Quick actions

### ✅ Product Management (`/admin/products`)
- List semua produk dengan table
- Search & filter (coming soon)
- Edit & Delete produk
- Preview gambar

### ✅ Add New Product (`/admin/products/new`)
- Form lengkap untuk tambah produk
- Upload image URL
- Set featured product
- Real-time validation

### ✅ Sidebar Navigation
- Dashboard
- Products
- Logout

## 📝 Cara Pakai:

### Tambah Produk Baru:

1. Klik **Products** di sidebar
2. Klik **+ Add Product**
3. Isi form:
   - **Name:** Nama produk
   - **Category:** Pilih kategori
   - **Price:** Harga (angka saja, tanpa Rp)
   - **Image URL:** URL gambar (dari Unsplash/Imgur)
   - **Description:** Deskripsi
   - **Featured:** Centang jika ingin tampil di homepage
4. Klik **Add Product**
5. Produk langsung muncul di website! ✨

### Edit Produk:

1. Di **Products** page, klik icon ✏️ (Edit)
2. Update data yang diperlukan
3. Save
4. Website otomatis update!

### Hapus Produk:

1. Di **Products** page, klik icon 🗑️ (Delete)
2. Konfirmasi
3. Produk terhapus dari database & website

## 🔐 Security:

- ✅ Protected routes (harus login)
- ✅ Session-based auth
- ✅ Auto logout setelah 1 jam
- ✅ RLS policies di Supabase
- ✅ Middleware protection

## 🌐 Deploy ke Vercel:

Dashboard admin akan otomatis deploy bersama website:

1. Push ke GitHub:
   ```bash
   git add .
   git commit -m "Add admin dashboard"
   git push
   ```

2. Vercel auto-deploy

3. Akses admin: `https://sagata.vercel.app/admin/login`

## 🎨 Customize:

### Ganti Logo/Nama:

Edit `src/app/admin/layout.tsx`:
```typescript
<h1 className="text-2xl font-bold">SAGATA</h1>
```

### Tambah Menu Sidebar:

Edit `src/app/admin/layout.tsx`, tambahkan di `<nav>`:
```typescript
<Link href="/admin/orders">
  <ShoppingCart className="w-5 h-5" />
  <span>Orders</span>
</Link>
```

## 📸 Upload Gambar (Future):

Saat ini pakai URL eksternal. Untuk upload langsung:

1. Setup Supabase Storage
2. Buat bucket `product-images`
3. Tambahkan upload component
4. Auto-generate URL

Mau saya buatkan? 🚀

## 🆘 Troubleshooting:

### Tidak bisa login?
- Pastikan email & password benar
- Cek di Supabase → Authentication → Users
- Pastikan user sudah "confirmed"

### Error "Not authenticated"?
- Jalankan SQL policy di atas
- Restart dev server

### Produk tidak muncul?
- Cek Supabase Table Editor
- Pastikan `.env.local` sudah benar
- Refresh halaman

---

**Dashboard admin sudah 100% ready!** 🎉

Login sekarang: http://localhost:3000/admin/login
