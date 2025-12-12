import { Button } from "../ui/Button";

export default function B2B() {
  return (
    <section id="b2b" className="py-24 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-accent font-bold tracking-widest text-xs uppercase mb-6 block">
           Corporate Services
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
           Hadiah Korporat dengan<br/>Sentuhan Budaya Nusantara
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
           Layanan kustomisasi produk heritage untuk hampers, souvenir perusahaan, dan hadiah eksklusif. 
           Tingkatkan brand image dengan produk berkelas yang mencerminkan kearifan lokal.
        </p>
        <div className="flex gap-4 justify-center">
           <Button className="bg-white text-primary hover:bg-gray-100">
             Download Katalog B2B
           </Button>
           <Button variant="outline" className="border-gray-600 text-white hover:bg-white/10 hover:text-white">
             Hubungi Sales
           </Button>
        </div>
      </div>
    </section>
  );
}