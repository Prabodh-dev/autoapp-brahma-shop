import Link from 'next/link';

type FooterProps = {};

export default function Footer({}: FooterProps) {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Product Showcase. All rights reserved.
        </p>
        <div className="mt-4">
          <Link href="/" className="text-gray-500 hover:text-gray-700 mx-2">
            Home
          </Link>
          <Link href="/about" className="text-gray-500 hover:text-gray-700 mx-2">
            About
          </Link>
          <Link href="/contact" className="text-gray-500 hover:text-gray-700 mx-2">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}