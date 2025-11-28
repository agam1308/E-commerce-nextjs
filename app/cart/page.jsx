'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../../lib/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 md:py-24">
        <div className="container-custom">
          <h1 className="text-3xl font-bold tracking-tight mb-12">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-24 bg-accent/20 rounded-sm">
              <p className="text-lg text-secondary mb-6">Your cart is empty.</p>
              <Link 
                href="/shop" 
                className="inline-block px-8 py-3 bg-primary text-white font-medium rounded-sm hover:bg-primary/90 transition-all"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-6 py-6 border-b border-border">
                    <div className="relative w-24 h-32 bg-accent rounded-sm overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-secondary">{item.category}</p>
                        </div>
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center border border-border rounded-sm">
                          <button 
                            className="px-3 py-1 hover:bg-accent transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="px-3 py-1 min-w-[2rem] text-center text-sm">{item.quantity}</span>
                          <button 
                            className="px-3 py-1 hover:bg-accent transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-secondary hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-accent/20 p-6 rounded-sm space-y-6 sticky top-24">
                  <h2 className="text-xl font-bold">Order Summary</h2>
                  
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-secondary">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary">Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="pt-4 border-t border-border flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button className="w-full py-4 bg-primary text-white font-medium rounded-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                    Checkout <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <p className="text-xs text-center text-secondary">
                    Secure checkout powered by Stripe.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
