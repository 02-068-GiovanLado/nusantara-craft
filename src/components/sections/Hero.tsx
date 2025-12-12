"use client";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Copywriting */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-bold tracking-wider text-xs uppercase mb-4 block">
            The Essentials Collection
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-[1.1]">
            Move through<br />your day,<br />effortlessly.
          </h1>
          <p className="text-secondary text-lg mb-8 max-w-md leading-relaxed">
            Tas dan pakaian yang didesain dengan keseimbangan fungsi dan estetika. 
            Dibuat untuk menemani setiap langkah perjalanan Anda.
          </p>
          <div className="flex gap-4">
            <Button size="lg">Shop Now</Button>
            <Button variant="outline" size="lg">Watch Film</Button>
          </div>
        </motion.div>

        {/* Visual / Image */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.2, duration: 0.6 }}
           className="relative h-[600px] bg-gray-100 rounded-4xl overflow-hidden"
        >
          <Image
            src="/images/hero/handbag-tenun.jpg"
            alt="Nusantara Craft Heritage Collection"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}