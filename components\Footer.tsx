import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 mt-8">
      <div className="container mx-auto text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Product Showcase. All rights reserved.</p>
        <div className="mt-2">
          <Link href="/" className="text-gray-800 hover:text-gray-900 mx-2">Home</Link>
          <Link href="/about" className="text-gray-800 hover:text-gray-900 mx-2">About</Link>
          <Link href="/contact" className="text-gray-800 hover:text-gray-900 mx-2">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;