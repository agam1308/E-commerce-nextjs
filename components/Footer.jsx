import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-accent/30 mt-auto">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-tighter">MINIMAL.</h3>
            <p className="text-sm text-secondary max-w-xs">
              Curated essentials for a simpler, more meaningful life. Quality over quantity.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li><Link href="/shop" className="hover:text-primary transition-colors">All Products</Link></li>
              <li><Link href="/shop" className="hover:text-primary transition-colors">New Arrivals</Link></li>
              <li><Link href="/shop" className="hover:text-primary transition-colors">Home Decor</Link></li>
              <li><Link href="/shop" className="hover:text-primary transition-colors">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Sustainability</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Newsletter</h4>
            <p className="text-sm text-secondary mb-4">Subscribe to receive updates and exclusive offers.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-3 py-2 text-sm border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary bg-background"
              />
              <button 
                type="submit" 
                className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary">
            © {new Date().getFullYear()} Minimal Store. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-secondary">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
