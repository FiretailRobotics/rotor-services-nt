import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'offwhite' | 'sand';
}

export function Section({ children, className = '', background = 'offwhite' }: SectionProps) {
  const bgStyles = {
    white: 'bg-white',
    offwhite: 'bg-territory-offwhite',
    sand: 'bg-territory-sand',
  };

  return (
    <section className={`py-16 md:py-24 ${bgStyles[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
