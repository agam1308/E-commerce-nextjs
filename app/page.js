import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products } from '../lib/products';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] w-full bg-accent/20">
          <div className="container-custom h-full flex flex-col md:flex-row items-center">
            <div className="flex-1 space-y-6 z-10 py-12 md:py-0">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-primary">
                Less is<br />More.
              </h1>
              <p className="text-lg text-secondary max-w-md">
                Discover our curated collection of minimalist essentials designed to elevate your everyday life.
              </p>
              <Link 
                href="/shop" 
                className="inline-block px-8 py-4 bg-primary text-white font-medium rounded-sm hover:bg-primary/90 transition-all"
              >
                Shop Collection
              </Link>
            </div>
            <div className="flex-1 relative w-full h-[50vh] md:h-full">
               <Image
                src="/hero.png"
                alt="Minimalist Lifestyle"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-24">
          <div className="container-custom">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">Featured</h2>
                <p className="text-secondary">Our most popular items this season.</p>
              </div>
              <Link href="/shop" className="text-sm font-medium hover:text-secondary border-b border-primary hover:border-secondary transition-colors pb-0.5">
                View All
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 bg-primary text-white">
          <div className="container-custom text-center max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Join the Movement</h2>
            <p className="text-gray-300 mb-8">
              Sign up for our newsletter to receive design inspiration, early access to new releases, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 text-primary bg-white rounded-sm focus:outline-none"
              />
              <button 
                type="submit" 
                className="px-8 py-3 bg-white/10 text-white font-medium rounded-sm hover:bg-white/20 transition-colors border border-white/20"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
