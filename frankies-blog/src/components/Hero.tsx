import { siteMetadata } from '@/lib/siteMetadata';

export default function Hero() {
  return (
    <section className="py-12 text-center">
      <h1 className="text-4xl font-bold">{siteMetadata.author}</h1>
      <p className="mt-4 text-lg text-gray-600">{siteMetadata.description}</p>
    </section>
  );
}
