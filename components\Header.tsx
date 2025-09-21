import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Route {
  path: string;
  title: string;
}

const routes: Route[] = [
  { path: '/', title: 'Home' },
  { path: '/products', title: 'Products' },
];

const Header = () => {
  const router = useRouter();

  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Product Showcase</Link>
        <ul className="flex space-x-4">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={`px-4 py-2 rounded-md ${
                  router.pathname === route.path
                    ? 'bg-gray-600'
                    : 'hover:bg-gray-600'
                }`}
              >
                {route.title}
              </Link>
            </li>
          ))}
          <li>
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-md text-white">
              Get Started
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;