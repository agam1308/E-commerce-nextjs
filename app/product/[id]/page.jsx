'use client';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { products } from '../../../lib/products';
import Image from 'next/image';
import { use, useState } from 'react';
import { notFound } from 'next/navigation';
import { useCart } from '../../../lib/CartContext';

export default function ProductPage({ params }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* Product Image */}
            <div className="relative aspect-[4/5] bg-accent rounded-sm overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <p className="text-sm text-secondary mb-2">{product.category}</p>
                <h1 className="text-4xl font-bold tracking-tight mb-4">{product.name}</h1>
                <p className="text-2xl font-medium">${product.price.toFixed(2)}</p>
              </div>

              <div className="prose prose-sm text-secondary">
                <p>{product.description}</p>
                <p>
                  Designed with attention to detail and crafted from high-quality materials. 
                  This piece seamlessly blends functionality with aesthetic appeal, making it 
                  a perfect addition to any modern space.
                </p>
              </div>

              <div className="space-y-4 pt-8 border-t border-border">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium">Quantity</span>
                  <div className="flex items-center border border-border rounded-sm">
                    <button 
                      className="px-3 py-1 hover:bg-accent transition-colors"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <span className="px-3 py-1 min-w-[3rem] text-center">{quantity}</span>
                    <button 
                      className="px-3 py-1 hover:bg-accent transition-colors"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button 
                  className="w-full py-4 bg-primary text-white font-medium rounded-sm hover:bg-primary/90 transition-all"
                  onClick={() => {
                    addToCart(product, quantity);
                    alert('Added to cart!');
                  }}
                >
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </button>
                
                <p className="text-xs text-center text-secondary">
                  Free shipping on orders over $100. 30-day return policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
