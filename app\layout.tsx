import { MetadataRoute } from 'next/server';
import { Metadata } from 'next';

import projectSpec from './project.json';

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