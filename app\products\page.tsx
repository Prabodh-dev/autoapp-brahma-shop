import { MetadataRoute } from 'next/server';
import HeroSection from '../../components/HeroSection';
import ProductCard from '../../components/ProductCard';

export const metadata: MetadataRoute = {
  title: 'Products',
  description: 'Showcase of 8 featured products.',
};

export default function Page() {
  const sections = [
    {
      id: 'hero-section',
      kind: 'hero',
      details: {
        headline: 'Featured Products',
        subheadline: 'Explore our top 8 selections.',
        items: [],
      },
    },
    {
      id: 'product-grid',
      kind: 'custom',
      details: {
        headline: '',
        subheadline: '',
        items: [
          { title: 'Product 1', body: 'Description of Product 1' },
          { title: 'Product 2', body: 'Description of Product 2' },
          { title: 'Product 3', body: 'Description of Product 3' },
          { title: 'Product 4', body: 'Description of Product 4' },
          { title: 'Product 5', body: 'Description of Product 5' },
          { title: 'Product 6', body: 'Description of Product 6' },
          { title: 'Product 7', body: 'Description of Product 7' },
          { title: 'Product 8', body: 'Description of Product 8' },
        ],
      },
    },
  ];

  return (
    <main className="container mx-auto px-4">
      {sections.map((section) => {
        if (section.kind === 'hero') {
          return (
            <HeroSection
              key={section.id}
              headline={section.details.headline}
              subheadline={section.details.subheadline}
            />
          );
        } else if (section.kind === 'custom') {
          return (
            <section key={section.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {section.details.items.map((item) => (
                  <ProductCard key={item.title} title={item.title} body={item.body} />
                ))}
              </div>
            </section>
          );
        }
        return null;
      })}
    </main>
  );
}