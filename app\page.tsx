import { MetadataRoute } from 'next/server';

export const metadata: MetadataRoute = {
  title: 'Product Showcase',
  description: 'Showcase of 8 featured products.',
};

export default function Page() {
  const products = [
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

  const ProductCard = ({ title, description, image, price }: { title: string; description: string; image: string; price: number }) => (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-lg font-medium mt-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-lg font-bold mt-2">${price}</p>
    </div>
  );

  const ProductList = ({ products }: { products: { title: string; description: string; image: string; price: number }[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.title} {...product} />
      ))}
    </div>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Featured Products</h1>
        <p className="text-lg mb-8">Explore our top 8 selections.</p>
        <ProductList products={products} />
      </section>
      <section className="text-center mt-12">
        <h2 className="text-2xl font-bold mb-4">Ready to learn more?</h2>
        <p className="text-lg mb-8">Contact us today!</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact Us</button>
      </section>
    </main>
  );
}