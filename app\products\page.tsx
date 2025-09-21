import { MetadataRoute } from 'next/server';
import HeroSection from './components/HeroSection';
import ProductCard from './components/ProductCard';
import ProductGrid from './components/ProductGrid';

export const metadata: MetadataRoute = {
  title: 'Products',
  description: 'Showcase of 8 featured products.',
};

export default function Page() {
  const products = [
    { title: 'Product 1', body: 'Description of Product 1' },
    { title: 'Product 2', body: 'Description of Product 2' },
    { title: 'Product 3', body: 'Description of Product 3' },
    { title: 'Product 4', body: 'Description of Product 4' },
    { title: 'Product 5', body: 'Description of Product 5' },
    { title: 'Product 6', body: 'Description of Product 6' },
    { title: 'Product 7', body: 'Description of Product 7' },
    { title: 'Product 8', body: 'Description of Product 8' },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <HeroSection headline="Featured Products" subheadline="Explore our top 8 selections." />
      <ProductGrid products={products} />
    </main>
  );
}