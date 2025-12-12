# 🇮🇩 Nusantara Craft - Heritage E-Commerce Website

Website e-commerce modern untuk produk kerajinan tradisional Indonesia dengan sentuhan kontemporer.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean design dengan animasi smooth menggunakan Framer Motion
- 📱 **Fully Responsive** - Tampil sempurna di semua device
- 🖼️ **Product Showcase** - Gallery produk dengan kategori (Bags, Apparel, Accessories, Home Decor)
- 🎯 **Hero Section** - Landing page menarik dengan CTA jelas
- 💼 **B2B Section** - Khusus untuk corporate gifts & hampers
- ⚡ **Fast Performance** - Next.js 16 dengan optimasi terbaik
- 🎭 **Heritage Theme** - Desain yang mencerminkan kearifan lokal Indonesia

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Database:** Drizzle ORM + Better-SQLite3
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## 📂 Project Structure

```
nusantara-craft/
├── public/
│   └── images/
│       ├── products/        # 📸 Simpan foto produk di sini
│       ├── categories/
│       ├── features/
│       └── hero/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Homepage
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Collection.tsx
│   │   │   ├── Categories.tsx
│   │   │   └── B2B.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── ProductCard.tsx
│   │       └── SectionHeading.tsx
│   ├── data/
│   │   └── products.ts      # 📦 Database produk
│   ├── db/
│   │   ├── index.ts
│   │   └── schema.ts
│   └── lib/
│       └── utils.ts
├── PHOTO_UPLOAD_GUIDE.md    # 📸 Panduan upload foto produk
└── package.json
```

## 🎯 Getting Started

### Prerequisites

- Node.js 20+ 
- npm, yarn, pnpm, atau bun

### Installation

1. Clone repository atau buka folder project:
```bash
cd d:\nusantara-craft
```

2. Install dependencies:
```bash
npm install
```

3. **Upload Foto Produk** (PENTING!):
   - Baca file `PHOTO_UPLOAD_GUIDE.md` untuk panduan lengkap
   - Simpan 10 foto produk ke folder `public/images/products/`
   - Nama file harus sesuai dengan yang tertera di guide

4. Run development server:
```bash
npm run dev
```

5. Buka browser: [http://localhost:3000](http://localhost:3000)

## 📸 Upload Foto Produk

Website ini membutuhkan **10 foto produk** untuk ditampilkan. Lihat panduan lengkap di:

👉 **[PHOTO_UPLOAD_GUIDE.md](./PHOTO_UPLOAD_GUIDE.md)**

Daftar foto yang dibutuhkan:
- ✅ `pouch-tenun.jpg`
- ✅ `handbag-tenun.jpg`
- ✅ `storage-box.jpg`
- ✅ `vest-blue.jpg`
- ✅ `vest-red.jpg`
- ✅ `tote-canvas.jpg`
- ✅ `crossbody-mini.jpg`
- ✅ `drawstring-bag.jpg`
- ✅ `scarf-tenun.jpg`
- ✅ `head-cover.jpg`

## 🎨 Customization

### Mengubah Warna Theme

Edit file `src/app/globals.css`:

```css
@theme {
  --color-primary: #1f2937;    /* Warna text utama */
  --color-secondary: #4b5563;  /* Warna text secondary */
  --color-accent: #4f46e5;     /* Warna tombol/link */
  --color-background: #ffffff;  /* Background utama */
  --color-surface: #f9fafb;    /* Background section */
}
```

### Menambah/Edit Produk

Edit file `src/data/products.ts`:

```typescript
export const products: Product[] = [
  {
    id: "1",
    name: "Nama Produk",
    category: "Bags", // Bags | Apparel | Accessories | Home Decor
    price: 125000,
    image: "/images/products/nama-file.jpg",
    description: "Deskripsi produk",
    featured: true, // Tampil di homepage
  },
  // ... produk lainnya
];
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build untuk production
npm start            # Run production server

# Linting
npm run lint         # Check code quality
```

## 📦 Database (Drizzle ORM)

Project ini sudah setup Drizzle ORM untuk future development:

```bash
# Generate migration
npx drizzle-kit generate

# Run migration
npx drizzle-kit migrate

# Open Drizzle Studio
npx drizzle-kit studio
```

## 🌐 Deployment

### Deploy ke Vercel (Recommended)

1. Push code ke GitHub
2. Import repository di [Vercel](https://vercel.com)
3. Deploy otomatis! ✨

### Deploy ke Netlify

1. Build project: `npm run build`
2. Upload folder `.next` ke Netlify
3. Configure build settings sesuai Next.js

## 📱 Sections

### 1. Hero Section
- Tagline menarik
- CTA buttons (Shop Now, Watch Film)
- Hero image produk unggulan

### 2. Features Section
- Heritage Craftsmanship
- Premium Quality
- Support Local Artisans

### 3. Collection Section
- Showcase 4 produk featured
- Product card dengan hover effect
- Link ke katalog lengkap

### 4. Categories Section
- 4 kategori produk (Bags, Apparel, Accessories, Home Decor)
- Image overlay dengan gradient
- Product count per kategori

### 5. B2B Section
- Informasi corporate gifts
- CTA untuk download katalog
- Contact sales button

## 🎯 Future Enhancements

- [ ] Halaman detail produk
- [ ] Shopping cart functionality
- [ ] Checkout & payment integration
- [ ] User authentication
- [ ] Admin dashboard
- [ ] Product search & filter
- [ ] Wishlist
- [ ] Product reviews
- [ ] Multi-language support (ID/EN)

## 📄 License

Copyright © 2025 Nusantara Craft. All rights reserved.

## 🤝 Support

Jika ada pertanyaan atau butuh bantuan:
- 📧 Email: [contact@nusantaracraft.com]
- 💬 WhatsApp: [+62 xxx xxx xxxx]

---

**Made with ❤️ for Indonesian Heritage Crafts**

