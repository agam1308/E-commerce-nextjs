'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Get in Touch</h1>
            <p className="text-secondary max-w-2xl mx-auto">
              Have a question about a product or your order? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-secondary">hello@ecommercedemo.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-secondary">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Studio</p>
                      <p className="text-secondary">
                        123 Design District<br />
                        New York, NY 10013
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">FAQ</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-1">Shipping Times</h3>
                    <p className="text-sm text-secondary">Standard shipping takes 3-5 business days. International shipping takes 7-14 business days.</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Returns</h3>
                    <p className="text-sm text-secondary">We accept returns within 30 days of delivery. Items must be unused and in original packaging.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-accent/20 p-8 rounded-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-3 py-2 border border-border rounded-sm focus:outline-none focus:ring-1 focus:ring-primary bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-3 py-2 border border-border rounded-sm focus:outline-none focus:ring-1 focus:ring-primary bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 border border-border rounded-sm focus:outline-none focus:ring-1 focus:ring-primary bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-3 py-2 border border-border rounded-sm focus:outline-none focus:ring-1 focus:ring-primary bg-background resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3 bg-primary text-white font-medium rounded-sm hover:bg-primary/90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
