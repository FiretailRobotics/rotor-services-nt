import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'light';
  size?: 'md' | 'lg';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-territory-red font-medium transition-all duration-200 inline-flex items-center justify-center';

  const variantStyles = {
    primary: 'bg-territory-red text-white hover:bg-red-700 border-2 border-territory-red',
    light: 'bg-transparent text-white hover:bg-white hover:text-territory-grey border-2 border-white',
    secondary: 'bg-transparent text-territory-grey hover:bg-territory-grey hover:text-white border-2 border-territory-grey',
  };

  const sizeStyles = {
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
