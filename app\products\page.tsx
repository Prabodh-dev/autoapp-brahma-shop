import { MetadataRoute } from 'next/server';
import ProductCard from './components/ProductCard';
import ProductList from './components/ProductList';

export const metadata: MetadataRoute = {
  title: 'Products',
  description: 'Showcase of 8 featured products.',
};

type Product = {
  title: string;
  description: string;
  image: string;
  price: number;
};

const products: Product[] = [
  {
    title: 'Product 1',
    description: 'Description 1',
    image: '/product1.jpg',
    price: 19.99,
  },
  {
    title: 'Product 2',
    description: 'Description 2',
    image: '/product2.jpg',
    price: 29.99,
  },
  {
    title: 'Product 3',
    description: 'Description 3',
    image: '/product3.jpg',
    price: 39.99,
  },
  {
    title: 'Product 4',
    description: 'Description 4',
    image: '/product4.jpg',
    price: 49.99,
  },
  {
    title: 'Product 5',
    description: 'Description 5',
    image: '/product5.jpg',
    price: 59.99,
  },
  {
    title: 'Product 6',
    description: 'Description 6',
    image: '/product6.jpg',
    price: 69.99,
  },
  {
    title: 'Product 7',
    description: 'Description 7',
    image: '/product7.jpg',
    price: 79.99,
  },
  {
    title: 'Product 8',
    description: 'Description 8',
    image: '/product8.jpg',
    price: 89.99,
  },
];

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section id="hero-section" className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Featured Products</h1>
        <p className="text-lg mb-4">Explore our top 8 selections.</p>
      </section>
      <section id="product-list-section" className="mb-8">
        <ProductList products={products} />
      </section>
      <section id="cta-section" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Ready to learn more?</h2>
        <p className="text-lg mb-4">Contact us today!</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contact Us
        </button>
      </section>
    </main>
  );
}