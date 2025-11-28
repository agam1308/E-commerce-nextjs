import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-accent rounded-sm mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium text-primary group-hover:text-secondary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-secondary">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}
