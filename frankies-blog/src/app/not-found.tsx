import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming Button is available
import { AlertTriangleIcon } from 'lucide-react'; // For an icon

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] px-4 text-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Subtracting approx header/footer height for vertical centering */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 sm:p-12 rounded-xl shadow-2xl">
        <div className="flex justify-center mb-6">
          <AlertTriangleIcon className="w-16 h-16 text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-slate-300 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't seem to exist. It might have been moved, deleted, or perhaps you mistyped the URL.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-lg">
            <Link href="/">
              Go to Homepage
            </Link>
          </Button>
          {/* Optional: Add a "Report an issue" or "Contact Support" button if relevant */}
          {/* <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 px-6 py-3 text-lg">
            Report an Issue
          </Button> */}
        </div>
        {/* Optional: Search bar - would require a search context/API */}
        {/* <div className="mt-12 w-full max-w-sm mx-auto">
          <input
            type="search"
            placeholder="Search our site..."
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div> */}
      </div>
    </div>
  );
}
