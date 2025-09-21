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
  const projectSpec = {
    "appName": "Product Showcase",
    "routes": [
      {
        "path": "/products",
        "title": "Products",
        "description": "Showcase of 8 featured products.",
        "layout": "marketing",
        "sections": [
          {
            "id": "hero-section",
            "kind": "hero",
            "details": {
              "headline": "Featured Products",
              "subheadline": "Explore our top 8 selections.",
              "items": []
            }
          },
          {
            "id": "product-grid",
            "kind": "custom",
            "details": {
              "headline": "",
              "subheadline": "",
              "items": [
                {
                  "title": "Product 1",
                  "body": "Description of Product 1"
                },
                {
                  "title": "Product 2",
                  "body": "Description of Product 2"
                },
                {
                  "title": "Product 3",
                  "body": "Description of Product 3"
                },
                {
                  "title": "Product 4",
                  "body": "Description of Product 4"
                },
                {
                  "title": "Product 5",
                  "body": "Description of Product 5"
                },
                {
                  "title": "Product 6",
                  "body": "Description of Product 6"
                },
                {
                  "title": "Product 7",
                  "body": "Description of Product 7"
                },
                {
                  "title": "Product 8",
                  "body": "Description of Product 8"
                }
              ]
            }
          }
        ]
      }
    ],
    "components": [
      {
        "name": "ProductCard",
        "props": [
          {
            "name": "title",
            "type": "string",
            "optional": false
          },
          {
            "name": "body",
            "type": "string",
            "optional": false
          },
          {
            "name": "image",
            "type": "string",
            "optional": true
          }
        ],
        "description": "Displays a single product with title, body, and optional image."
      },
      {
        "name": "HeroSection",
        "props": [
          {
            "name": "headline",
            "type": "string",
            "optional": false
          },
          {
            "name": "subheadline",
            "type": "string",
            "optional": true
          }
        ],
        "description": "A hero section component for the page."
      }
    ],
    "theme": {
      "primary": "#3b82f6",
      "secondary": "#0ea5e9"
    }
  };

  return (
    <main>
      <HeroSection headline={projectSpec.routes[0].sections[0].details.headline} subheadline={projectSpec.routes[0].sections[0].details.subheadline} />
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectSpec.routes[0].sections[1].details.items.map((item) => (
              <ProductCard key={item.title} title={item.title} body={item.body} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}