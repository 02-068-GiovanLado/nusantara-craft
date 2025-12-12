import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-bold text-primary mb-6">RAKATA.</h3>
          <p className="text-secondary max-w-sm">
            Membawa kearifan lokal ke dalam desain modern yang fungsional. 
            Dibuat di Indonesia, untuk dunia.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-primary mb-4">Shop</h4>
          <ul className="space-y-3 text-secondary text-sm">
            <li><Link href="#" className="hover:text-primary">Bags</Link></li>
            <li><Link href="#" className="hover:text-primary">Apparel</Link></li>
            <li><Link href="#" className="hover:text-primary">Accessories</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-primary mb-4">Support</h4>
          <ul className="space-y-3 text-secondary text-sm">
            <li><Link href="#" className="hover:text-primary">Shipping</Link></li>
            <li><Link href="#" className="hover:text-primary">Warranty</Link></li>
            <li><Link href="#" className="hover:text-primary">B2B Inquiry</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Rakata. All rights reserved.
      </div>
    </footer>
  );
}