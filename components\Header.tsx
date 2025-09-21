import Link from 'next/link';
import { useRouter } from 'next/navigation';
import projectSpec from '../project.json';

interface Route {
  path: string;
  title: string;
}

const Header: React.FC = () => {
  const router = useRouter();
  const routes: Route[] = projectSpec.routes.map(route => ({ path: route.path, title: route.title }));

  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <div>
        <Link href="/" className="text-2xl font-bold">{projectSpec.appName}</Link>
      </div>
      <nav>
        <ul className="flex space-x-4">
          {routes.map((route) => (
            <li key={route.path}>
              <Link href={route.path} className={`hover:underline ${router.pathname === route.path ? 'text-blue-500' : ''}`}>
                {route.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        CTA
      </button>
    </header>
  );
};

export default Header;