"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCategoryCounts } from "@/lib/products";

const categoryImages = {
  'Bags': 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&h=800&fit=crop',
  'Apparel': 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=800&h=800&fit=crop',
  'Accessories': 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=800&fit=crop',
  'Home Decor': 'https://images.unsplash.com/photo-1595726566821-a9d9994c63f8?w=800&h=800&fit=crop',
};

const categoryIds = {
  'Bags': 'bags',
  'Apparel': 'apparel',
  'Accessories': 'accessories',
  'Home Decor': 'home-decor',
};

export default function Categories() {
  const [counts, setCounts] = useState<Record<string, number>>({
    'Bags': 0,
    'Apparel': 0,
    'Accessories': 0,
    'Home Decor': 0,
  });

  useEffect(() => {
    async function loadCounts() {
      const data = await getCategoryCounts();
      setCounts(data);
    }
    loadCounts();
  }, []);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading
        title="Shop by Category"
        subtitle="Temukan koleksi produk heritage Nusantara yang sesuai dengan kebutuhan Anda"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {Object.entries(counts).map(([name, count], index) => (
          <Link key={name} href={`/category/${categoryIds[name as keyof typeof categoryIds]}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={categoryImages[name as keyof typeof categoryImages]}
                  alt={name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{name}</h3>
                  <p className="text-sm text-white/90">{count} Products</p>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
