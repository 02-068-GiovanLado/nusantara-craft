"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const features = [
  {
    id: "heritage",
    title: "Heritage Craftsmanship",
    desc: "Setiap produk dibuat dengan teknik tenun tradisional Nusantara yang diwariskan turun-temurun.",
    color: "bg-amber-50",
    image: "/images/features/heritage.jpg"
  },
  {
    id: "quality",
    title: "Premium Quality",
    desc: "Material pilihan dengan detail sulam emas dan finishing berkualitas tinggi.",
    color: "bg-red-50",
    image: "/images/features/quality.jpg"
  },
  {
    id: "artisan",
    title: "Support Local Artisans",
    desc: "Setiap pembelian mendukung pengrajin lokal dan melestarikan budaya Indonesia.",
    color: "bg-blue-50",
    image: "/images/features/artisan.jpg"
  }
];

export default function Features() {
  const [active, setActive] = useState(0);

  return (
    <section id="features" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        <div>
          <h2 className="text-3xl font-bold text-primary mb-6">Heritage Meets Modern Design</h2>
          <div className="space-y-2">
            {features.map((f, idx) => (
              <button
                key={f.id}
                onClick={() => setActive(idx)}
                className={`w-full text-left p-6 rounded-xl transition-all ${
                  active === idx ? "bg-white shadow-md ring-1 ring-gray-100" : "hover:bg-gray-100"
                }`}
              >
                <h3 className={`font-bold text-lg mb-1 ${active === idx ? "text-accent" : "text-primary"}`}>
                  {f.title}
                </h3>
                <p className="text-secondary text-sm">{f.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Visual Area */}
        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl bg-white">
           <AnimatePresence mode="wait">
             <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full relative"
             >
                <Image
                  src={features[active].image}
                  alt={features[active].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-2xl"
                />
             </motion.div>
           </AnimatePresence>
        </div>

      </div>
    </section>
  );
}