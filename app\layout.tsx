import { MetadataRoute } from 'next/server';
import { Metadata } from 'next';
import projectSpec from './project.json';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import ProductCard from './components/ProductCard';

export const metadata: Metadata = {
  title: projectSpec.appName,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}

export const dynamic = 'force-dynamic';


export function generateMetadata({params}: {params: any}): MetadataRoute {
  const route = projectSpec.routes.find(route => route.path === `/${params?.route}`);
  if (route) {
    return {
      title: route.title,
      description: route.description,
    };
  }
  return {title: projectSpec.appName};
}