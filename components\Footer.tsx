import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 text-center">
      <div className="container mx-auto">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Product Showcase. All rights reserved.
        </p>
        <div className="mt-2">
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
};

export default Footer;