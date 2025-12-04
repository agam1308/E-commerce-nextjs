'use client';

import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '../lib/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          ECOMMERCE DEMO
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium hover:text-secondary transition-colors">
            Home
          </Link>
          <Link href="/shop" className="text-sm font-medium hover:text-secondary transition-colors">
            Shop
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-secondary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-secondary transition-colors">
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="relative p-2 hover:bg-accent rounded-full transition-colors">
            <ShoppingBag className="w-5 h-5" />
            {isMounted && cartCount > 0 && (
              <span 
                className="absolute top-0 right-0 w-4 h-4 bg-black text-white text-[10px] font-bold flex items-center justify-center rounded-full"
              >
                {cartCount}
              </span>
            )}
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-accent rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col p-4 space-y-4">
            <Link 
              href="/" 
              className="text-sm font-medium hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/shop" 
              className="text-sm font-medium hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
