import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { routes } from '../data/routes'; // Assuming routes are exported from here

interface HeaderProps {
  appName: string;
}

export default function Header({ appName }: HeaderProps) {
  const router = useRouter();

  return (
    <header className="bg-gray-800 text-white py-4 px-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">{appName}</Link>
        <nav>
          <ul className="flex space-x-4">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  href={route.path}
                  className={`py-2 px-4 rounded-md ${
                    router.pathname === route.path
                      ? 'bg-gray-600 text-white'
                      : 'hover:bg-gray-600 hover:text-white'
                  }`}
                >
                  {route.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          CTA
        </button>
      </div>
    </header>
  );
}