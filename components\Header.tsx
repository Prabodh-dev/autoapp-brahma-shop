import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { routes } from '../data/routes'; // Assuming routes are exported from here

interface HeaderProps {
  appName: string;
}

export default function Header({ appName }: HeaderProps) {
  const router = useRouter();

  return (
    <header className="bg-gray-100 shadow-md">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">{appName}</div>
        <ul className="flex space-x-6">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={`text-gray-600 hover:text-blue-500 ${
                  router.pathname === route.path ? 'font-bold' : ''
                }`}
              >
                {route.title}
              </Link>
            </li>
          ))}
        </ul>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contact Us
        </button>
      </nav>
    </header>
  );
}