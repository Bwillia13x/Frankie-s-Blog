import { siteMetadata } from '@/lib/siteMetadata';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from './icons';

const icons = {
  github: GitHubIcon,
  twitter: TwitterIcon,
  linkedin: LinkedInIcon,
};

export default function Footer() {
  return (
    <footer className="border-t py-6 mt-12">
      <div className="container mx-auto flex justify-between items-center">
        <span>&copy; {new Date().getFullYear()} {siteMetadata.author}</span>
        <div className="flex space-x-4">
          {(Object.keys(siteMetadata.social) as Array<keyof typeof siteMetadata.social>).map(
            (key) => {
              const Icon = icons[key];
              return (
                <a key={key} href={siteMetadata.social[key]} className="hover:text-blue-500">
                  <Icon className="h-5 w-5" />
                </a>
              );
            }
          )}
        </div>
      </div>
    </footer>
  );
}
