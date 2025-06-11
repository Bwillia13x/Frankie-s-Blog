"use client"; // Error components must be Client Components

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button'; // Assuming Button is available
import { AlertTriangleIcon } from 'lucide-react'; // For an icon

interface GlobalErrorProps {
  error: Error & { digest?: string }; // digest for server errors
  reset: () => void; // Function to attempt to re-render the segment
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service or console
    console.error("Global error caught:", error);
    // Example: Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      {/* Minimal html and body tags are recommended for root error components */}
      <body className="bg-slate-900 text-white">
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 sm:p-12 rounded-xl shadow-2xl">
            <div className="flex justify-center mb-6">
              <AlertTriangleIcon className="w-16 h-16 text-red-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Something Went Wrong
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-md mx-auto">
              We encountered an unexpected issue. Please try again. If the problem persists, please contact support.
            </p>
            {process.env.NODE_ENV === 'development' && error?.message && (
               <details className="mb-6 bg-slate-700 p-4 rounded-lg text-left w-full max-w-2xl">
                <summary className="cursor-pointer text-slate-400 hover:text-slate-200">Error Details</summary>
                <pre className="mt-2 text-xs text-slate-300 whitespace-pre-wrap break-all">
                  {error.message}
                  {error.digest && `\nDigest: ${error.digest}`}
                  {error.stack && `\n\nStack Trace:\n${error.stack}`}
                </pre>
              </details>
            )}
            <Button
              onClick={reset}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-lg"
            >
              Try Again
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
