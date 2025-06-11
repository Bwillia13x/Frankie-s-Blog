'use client';

import React, { useCallback, useState } from 'react'; // Import useState
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MailIcon, Loader2, AlertCircleIcon, CheckCircle2Icon } from 'lucide-react'; // Added icons

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

interface NewsletterCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  placeholderText?: string;
  subscriberCount?: string | number;
  className?: string;
  variant?: 'simple' | 'card' | 'inline';
  // onSubmit should ideally return a promise to handle async status
  onSubmit?: (email: string) => Promise<void> | void;
}

const NewsletterCTAComponent: React.FC<NewsletterCTAProps> = ({
  title = "📬 Join the Newsletter",
  description = "Get the latest posts, insights, and resources delivered to your inbox weekly.",
  buttonText = "Subscribe",
  buttonLink,
  placeholderText = "your@email.com",
  subscriberCount,
  className = "",
  variant = "card",
  onSubmit,
}) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!onSubmit || !email) return;

    setStatus('loading');
    setErrorMessage(null);
    try {
      await onSubmit(email);
      setStatus('success');
      // setEmail(""); // Optionally clear email on success
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : "An unknown error occurred.");
      console.error("Subscription error:", err);
    }
  }, [onSubmit, email]);

  const inputId = React.useId();

  const renderButtonContent = () => {
    if (status === 'loading') {
      return <Loader2 className="animate-spin w-5 h-5" />;
    }
    if (status === 'success') {
      return <CheckCircle2Icon className="w-5 h-5" />;
    }
    return buttonText;
  };

  const content = (
    <>
      <div className="flex items-center gap-2 mb-3">
        <MailIcon className="w-6 h-6 text-blue-300" />
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-sm text-slate-300 mb-4">{description}</p>
      {!buttonLink || (buttonLink && onSubmit) ? ( // Show form if onSubmit is present, or if both link and submit are (though submit takes precedence)
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <label htmlFor={inputId} className="sr-only">Email</label>
          <input
            id={inputId}
            type="email"
            placeholder={placeholderText}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading' || status === 'success'}
            className="flex-1 px-3 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70"
            required
          />
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400"
            disabled={status === 'loading' || status === 'success'}
          >
            {renderButtonContent()}
          </Button>
        </form>
      ) : ( // Only show link button if no onSubmit is provided
         <Button asChild className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
            <Link href={buttonLink!}>{buttonText}</Link>
          </Button>
      )}

      {status === 'success' && (
        <p className="text-xs text-green-400 mt-2">Thanks for subscribing!</p>
      )}
      {status === 'error' && (
        <div className="text-xs text-red-400 mt-2 flex items-center gap-1">
          <AlertCircleIcon className="w-4 h-4"/>
          <p>Failed: {errorMessage || "Please try again."}</p>
          {/* Retry button could be added here if desired, or user can just re-submit */}
        </div>
      )}
      {status !== 'success' && status !== 'error' && subscriberCount && (
        <p className="text-xs text-slate-400 mt-2">{subscriberCount} developers already subscribed</p>
      )}
    </>
  );

  if (variant === 'card') {
    return (
      <Card className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 ${className}`}>
        <CardContent className="p-6">
          {content}
        </CardContent>
      </Card>
    );
  }

  if (variant === 'inline') {
     return (
      <div className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 max-w-md mx-auto ${className}`}>
        {content}
      </div>
     )
  }

  return (
    <div className={className}>
      {content}
    </div>
  );
};

export const NewsletterCTA = React.memo(NewsletterCTAComponent);
