import { Metadata } from 'next';
import { ProjectSpec } from './types'; // Assuming you have a types.ts file

const projectSpec: ProjectSpec = {
  "appName": "Product Showcase",
  "routes": [
    {
      "path": "/",
      "title": "Home",
      "description": "Homepage with product listing.",
      "layout": "marketing",
      "sections": [
        {
          "id": "hero-section",
          "kind": "hero",
          "details": {
            "headline": "Welcome to Our Product Showcase",
            "subheadline": "Discover our amazing products.",
            "items": []
          }
        },
        {
          "id": "product-listing",
          "kind": "custom",
          "details": {
            "headline": "Featured Products",
            "subheadline": "Browse our selection.",
            "items": []
          }
        },
        {
          "id": "cta-section",
          "kind": "cta",
          "details": {
            "headline": "Ready to get started?",
            "subheadline": "Contact us today!",
            "items": []
          }
        }
      ]
    },
    {
      "path": "/products",
      "title": "Products",
      "description": "Page listing 8 products.",
      "layout": "marketing",
      "sections": [
        {
          "id": "product-grid",
          "kind": "custom",
          "details": {
            "headline": "Our Products",
            "subheadline": "Explore our range.",
            "items": [
              {
                "title": "Product 1",
                "body": "Description 1"
              },
              {
                "title": "Product 2",
                "body": "Description 2"
              },
              {
                "title": "Product 3",
                "body": "Description 3"
              },
              {
                "title": "Product 4",
                "body": "Description 4"
              },
              {
                "title": "Product 5",
                "body": "Description 5"
              },
              {
                "title": "Product 6",
                "body": "Description 6"
              },
              {
                "title": "Product 7",
                "body": "Description 7"
              },
              {
                "title": "Product 8",
                "body": "Description 8"
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
      "description": "Component to display a single product."
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
      "description": "Hero section component."
    },
    {
      "name": "ProductGrid",
      "props": [
        {
          "name": "products",
          "type": "ProductCard[]",
          "optional": false
        }
      ],
      "description": "Component to display a grid of products."
    }
  ],
  "theme": {
    "primary": "#3b82f6",
    "secondary": "#0ea5e9"
  }
};


export const metadata: Metadata = {
  title: projectSpec.routes[0].title,
  description: projectSpec.routes[0].description,
}

export default function Page() {
  const { sections } = projectSpec.routes[0];

  const HeroSection = ({ headline, subheadline }: { headline: string; subheadline?: string }) => (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">{headline}</h1>
        {subheadline && <p className="text-lg mb-8">{subheadline}</p>}
      </div>
    </section>
  );

  const CTASection = ({ headline, subheadline }: { headline: string; subheadline?: string }) => (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{headline}</h2>
        {subheadline && <p className="text-lg mb-8">{subheadline}</p>}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </section>
  );


  return (
    <main className="flex flex-col min-h-screen">
      {sections.map((section) => {
        switch (section.kind) {
          case 'hero':
            return <HeroSection headline={section.details.headline} subheadline={section.details.subheadline} />;
          case 'cta':
            return <CTASection headline={section.details.headline} subheadline={section.details.subheadline} />;
          default:
            return null;
        }
      })}
    </main>
  );
}