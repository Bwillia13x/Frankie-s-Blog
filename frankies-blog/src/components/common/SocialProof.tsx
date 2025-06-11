import React from 'react';
import Image from 'next/image'; // Import next/image
import { Card, CardContent } from "@/components/ui/card";

export interface Testimonial {
  id: string | number;
  name: string;
  role?: string;
  company?: string;
  content: string;
  avatar?: string; // Initials
  avatarImageUrl?: string; // URL for actual image
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  cardClassName?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = React.memo(({ testimonial, cardClassName }) => {
  return (
    <Card className={cardClassName}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {testimonial.avatarImageUrl ? (
            <Image
              src={testimonial.avatarImageUrl}
              alt={testimonial.name}
              width={48} // Corresponds to w-12
              height={48} // Corresponds to h-12
              className="rounded-full flex-shrink-0"
            />
          ) : testimonial.avatar && (
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              {testimonial.avatar}
            </div>
          )}
          <div className="flex-1">
            <p className="text-slate-300 mb-3 italic">"{testimonial.content}"</p>
            <p className="font-semibold text-white">{testimonial.name}</p>
            {(testimonial.role || testimonial.company) && (
              <p className="text-sm text-slate-400">
                {testimonial.role}{testimonial.role && testimonial.company ? ', ' : ''}{testimonial.company}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
});
TestimonialCard.displayName = 'TestimonialCard';

interface SocialProofProps {
  testimonials: Testimonial[];
  title?: string;
  className?: string;
  cardClassName?: string;
  variant?: 'grid' | 'carousel';
}

const SocialProofComponent: React.FC<SocialProofProps> = ({
  testimonials,
  title = "💬 What People Say",
  className = "",
  cardClassName = "bg-slate-800/50 backdrop-blur-sm border-slate-700",
  variant = 'grid',
}) => {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  // If testimonials array is created inline in parent, this component might re-render
  // despite React.memo if the array identity changes. Parent should memoize `testimonials` prop.
  return (
    <section className={`py-12 ${className}`}>
      <h2 className="text-3xl font-bold text-white text-center mb-10">{title}</h2>
      {variant === 'grid' ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              cardClassName={cardClassName}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-400">Carousel view not implemented yet.</p>
      )}
    </section>
  );
};

export const SocialProof = React.memo(SocialProofComponent);
