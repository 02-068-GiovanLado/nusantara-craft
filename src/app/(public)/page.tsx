import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Collection from "@/components/sections/CollectionSupabase";
import Categories from "@/components/sections/CategoriesSupabase";
import B2B from "@/components/sections/B2B";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Collection />
      <Categories />
      <B2B />
    </main>
  );
}