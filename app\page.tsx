import { MetadataRoute } from 'next/server';

export const metadata: MetadataRoute = {
  title: 'Product Showcase',
  description: 'Showcase of 8 featured products.',
};

const HeroSection = ({ headline, subheadline }: { headline: string; subheadline?: string }) => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">{headline}</h1>
      {subheadline && <p className="text-lg text-gray-600 mb-8">{subheadline}</p>}
    </div>
  </section>
);

const ProductCard = ({ title, body, image }: { title: string; body: string; image?: string }) => (
  <div className="bg-white rounded-lg shadow-md p-6 m-4">
    {image && <img src={image} alt={title} className="w-full mb-4" />}
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-gray-600">{body}</p>
  </div>
);

export default function Page() {
  const route = {
    path: "/products",
    title: "Products",
    description: "Showcase of 8 featured products.",
    layout: "marketing",
    sections: [
      {
        id: "hero-section",
        kind: "hero",
        details: {
          headline: "Featured Products",
          subheadline: "Explore our top 8 selections.",
          items: []
        }
      },
      {
        id: "product-list",
        kind: "custom",
        details: {
          headline: "",
          subheadline: "",
          items: [
            {
              title: "Product 1",
              body: "Description of Product 1"
            },
            {
              title: "Product 2",
              body: "Description of Product 2"
            },
            {
              title: "Product 3",
              body: "Description of Product 3"
            },
            {
              title: "Product 4",
              body: "Description of Product 4"
            },
            {
              title: "Product 5",
              body: "Description of Product 5"
            },
            {
              title: "Product 6",
              body: "Description of Product 6"
            },
            {
              title: "Product 7",
              body: "Description of Product 7"
            },
            {
              title: "Product 8",
              body: "Description of Product 8"
            }
          ]
        }
      }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {route.sections.map((section) => {
        if (section.kind === 'hero') {
          return <HeroSection key={section.id} headline={section.details.headline} subheadline={section.details.subheadline} />;
        } else if (section.kind === 'custom') {
          return (
            <section key={section.id} className="container mx-auto py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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