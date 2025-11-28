import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { BASE_PATH } from '../../lib/constants';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-accent/20">
          <div className="container-custom text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Story</h1>
            <p className="text-lg text-secondary leading-relaxed">
              We believe in the power of simplicity. In a world full of noise, we curate objects that bring calm, clarity, and purpose to your everyday life.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square bg-accent rounded-sm overflow-hidden">
                <Image
                  src={`${BASE_PATH}/hero.png`}
                  alt="Our Studio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">Designed for Living</h2>
                <div className="space-y-4 text-secondary">
                  <p>
                    Founded in 2024, Minimal Store was born from a desire to strip away the unnecessary. We partner with artisans who share our commitment to quality materials and timeless design.
                  </p>
                  <p>
                    Every product in our collection is chosen because it serves a purpose and brings joy. We don't believe in trends; we believe in objects that last.
                  </p>
                  <p>
                    Sustainability is at the core of what we do. From vegetable-tanned leathers to ethically sourced woods, we ensure our footprint is as light as our aesthetic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-primary text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Quality</h3>
                <p className="text-gray-300">
                  We never compromise on materials or craftsmanship. Good design is durable design.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Simplicity</h3>
                <p className="text-gray-300">
                  We remove the clutter to focus on what truly matters. Less, but better.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Sustainability</h3>
                <p className="text-gray-300">
                  We are committed to responsible production and conscious consumption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section (Public Assets) */}
        <section className="py-24 bg-accent/20">
          <div className="container-custom text-center">
            <h2 className="text-2xl font-bold mb-12">Powered By</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image src={`${BASE_PATH}/next.svg`} alt="Next.js" width={120} height={25} />
              <Image src={`${BASE_PATH}/vercel.svg`} alt="Vercel" width={100} height={22} />
              <div className="flex gap-8">
                <Image src={`${BASE_PATH}/file.svg`} alt="File" width={24} height={24} />
                <Image src={`${BASE_PATH}/globe.svg`} alt="Globe" width={24} height={24} />
                <Image src={`${BASE_PATH}/window.svg`} alt="Window" width={24} height={24} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
