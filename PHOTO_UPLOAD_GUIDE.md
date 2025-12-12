# 📸 Panduan Menyimpan Foto Produk Nusantara Craft

## ✅ Yang Sudah Dikerjakan:

1. ✅ Struktur folder sudah dibuat: `public/images/products/`
2. ✅ Database produk sudah dibuat dengan 10 produk
3. ✅ Komponen website sudah terintegrasi dengan data produk
4. ✅ Hero section, Collection, Categories sudah siap menampilkan gambar

## 📁 Foto yang Perlu Disimpan:

Silakan simpan foto-foto produk dengan nama file berikut ke folder: **`public/images/products/`**

### Daftar Foto dan Penjelasan:

| No | Nama File | Deskripsi Foto | Produk |
|----|-----------|----------------|--------|
| 1 | `pouch-tenun.jpg` | Foto 3 pouch dengan motif tenun (merah, biru, merah-pink) | Tenun Pouch Collection |
| 2 | `storage-box.jpg` | Foto 2 kotak storage (pink & hijau dengan hiasan emas) | Traditional Storage Box |
| 3 | `vest-red.jpg` | Foto rompi merah dengan garis hitam & motif emas | Tenun Vest - Red Stripe |
| 4 | `vest-blue.jpg` | Foto rompi biru dengan motif tenun emas | Tenun Vest - Blue |
| 5 | `handbag-tenun.jpg` | Foto 2 tas tangan dengan motif emas mewah | Heritage Hand Bag |
| 6 | `head-cover.jpg` | Foto peci/tutup kepala dengan motif tradisional | Decorative Head Cover |
| 7 | `tote-canvas.jpg` | Foto tas kanvas cream dengan panel tenun di tengah | Canvas Tote with Tenun Detail |
| 8 | `crossbody-mini.jpg` | Foto tas selempang mini dengan motif emas | Mini Crossbody Tenun |
| 9 | `drawstring-bag.jpg` | Foto tas serut merah/pink dengan motif colorful | Drawstring Bag Tenun |
| 10 | `scarf-tenun.jpg` | Foto selendang/scarf dengan detail emas | Traditional Tenun Scarf |

## 🚀 Cara Menyimpan Foto:

### Opsi 1: Manual (Drag & Drop)
1. Buka folder: `D:\nusantara-craft\public\images\products\`
2. Simpan/copy setiap foto dengan nama file yang **PERSIS** sama seperti tabel di atas
3. Pastikan format: `.jpg` (lowercase)

### Opsi 2: Menggunakan AI Image Generator (Jika Foto Asli Tidak Tersedia)
Jika Anda ingin menggunakan placeholder sementara, gunakan layanan seperti:
- https://placeholder.com
- https://unsplash.com (foto tenun/kerajinan Indonesia)
- https://pexels.com

## 📏 Spesifikasi Gambar yang Direkomendasikan:

- **Format:** JPG atau PNG
- **Ukuran minimal:** 800x800px (untuk produk)
- **Ukuran ideal:** 1200x1200px atau lebih
- **Aspect ratio:** 1:1 (square) atau 4:5 (portrait)
- **Ukuran file:** Maksimal 500KB per gambar (untuk performa website)

## 🎨 Tips untuk Foto Produk Terbaik:

1. **Background bersih** - Gunakan background putih atau solid color
2. **Pencahayaan baik** - Cahaya natural atau softbox
3. **Fokus tajam** - Detail motif terlihat jelas
4. **Multiple angles** - Foto dari berbagai sudut (depan, samping, detail)
5. **Consistent style** - Semua foto dengan style yang seragam

## 🔄 Setelah Foto Disimpan:

Website akan **otomatis** menampilkan gambar di:
- ✨ Hero section (menggunakan `tote-canvas.jpg`)
- 🛍️ Collection section (4 produk featured)
- 📂 Categories section (1 foto per kategori)

## ⚡ Tidak Perlu Restart Server!

Next.js akan otomatis mendeteksi gambar baru di folder `public/`. Cukup:
1. Simpan foto
2. Refresh browser (Ctrl + R)

## 🆘 Troubleshooting:

### Gambar tidak muncul?
- ✅ Pastikan nama file **PERSIS** sama (case-sensitive)
- ✅ Pastikan file ada di folder `public/images/products/`
- ✅ Cek ekstensi file: `.jpg` bukan `.JPG` atau `.jpeg`
- ✅ Hard refresh browser: Ctrl + Shift + R

### Gambar terpotong atau tidak proporsional?
- Gambar akan otomatis di-crop ke aspect ratio yang tepat
- Gunakan `object-cover` yang sudah diset di component

## 📞 Kontak:

Jika ada pertanyaan, silakan chat lagi!

---

**Made with ❤️ for Nusantara Craft**

