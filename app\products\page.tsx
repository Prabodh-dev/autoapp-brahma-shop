import { MetadataRoute } from 'next/server';
import ProductCard from '@/components/ProductCard';
import ProductGrid from '@/components/ProductGrid';

export const metadata: MetadataRoute = {
  title: 'Products',
  description: 'Page listing 8 products.',
};

export default function Page() {
  const products = [
    { title: 'Product 1', body: 'Description 1' },
    { title: 'Product 2', body: 'Description 2' },
    { title: 'Product 3', body: 'Description 3' },
    { title: 'Product 4', body: 'Description 4' },
    { title: 'Product 5', body: 'Description 5' },
    { title: 'Product 6', body: 'Description 6' },
    { title: 'Product 7', body: 'Description 7' },
    { title: 'Product 8', body: 'Description 8' },
  ];

  return (
    <main className="p-4">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Our Products</h1>
        <p className="text-lg">Explore our range.</p>
      </section>
      <ProductGrid products={products.map((p) => ({...p, image: ''}))} />
    </main>
  );
}