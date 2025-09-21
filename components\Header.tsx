import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { routes } from '../data/routes'; // Assuming routes are exported from here

const Header: React.FC = () => {
  const router = useRouter();
  const projectSpec = {
    appName: "Product Showcase",
    routes: [
      {
        "path": "/products",
        "title": "Products",
        "description": "Showcase of 8 featured products.",
        "layout": "marketing",
        "sections": []
      }
    ]
  };

  return (
    <header className="bg-gray-800 text-white py-4 px-6 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">{projectSpec.appName}</Link>
        <nav>
          <ul className="flex space-x-4">
            {projectSpec.routes.map((route) => (
              <li key={route.path}>
                <Link
                  href={route.path}
                  className={`text-lg hover:underline ${router.pathname === route.path ? 'underline' : ''}`}
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
};

export default Header;