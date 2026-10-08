import { ReactNode, useEffect, useState } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  image?: string;
  video?: string;
  height?: 'standard' | 'tall';
}

export function Hero({ title, subtitle, children, image, video, height = 'tall' }: HeroProps) {
  const [reduceMotion, setReduceMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(preference.matches);
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);
  const heightStyles = {
    standard: 'min-h-[400px]',
    tall: 'min-h-[600px]',
  };

  return (
    <div className={`relative ${heightStyles[height]} flex items-center justify-center text-white overflow-hidden py-12 md:py-16`}>
      {video && !reduceMotion ? (
        <>
          <video
            poster={image}
            preload="metadata"
            aria-hidden="true"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </>
      ) : (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: image ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})` : 'linear-gradient(135deg, #5B6B6F 0%, #A6161A 100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed opacity-95">
            {subtitle}
          </p>
        )}
        {children && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
