import Link from 'next/link';
import { siteMetadata } from '@/lib/siteMetadata';

export default function Header() {
  return (
    <header className="py-4 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold">
          {siteMetadata.title}
        </Link>
        <nav className="space-x-4">
          {siteMetadata.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline">
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
