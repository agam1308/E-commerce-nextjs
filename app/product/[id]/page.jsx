import { products } from '../../../lib/products';
import ProductDetails from './ProductDetails';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function Page({ params }) {
  const { id } = await params;
  return <ProductDetails id={id} />;
}
