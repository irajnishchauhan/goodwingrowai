import React from 'react';
import Image from 'next/image';

type LogoVariant = 'horizontal' | 'stacked' | 'icon';
type LogoTheme = 'dark' | 'light' | 'monochrome';
type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

export interface GoodwinLogoProps {
  variant?: LogoVariant;
  theme?: LogoTheme;
  size?: LogoSize;
  className?: string;
}

export const GoodwinLogo: React.FC<GoodwinLogoProps> = ({
  variant = 'horizontal',
  theme = 'dark',
  size = 'md',
  className = '',
}) => {
  // Height mapping based on previous component sizes
  const heightMap = {
    sm: 24,
    md: 32,
    lg: 48,
    xl: 80,
  };

  const height = heightMap[size];
  
  // Calculate width based on aspect ratio of the SVG viewboxes
  let width = height;
  if (variant === 'horizontal') width = height * 5;
  if (variant === 'stacked') width = Math.round(height * (240 / 140));

  let fileName = `logo-${variant}`;
  if (theme === 'monochrome') {
    // Only one monochrome variant exists, fallback to it
    fileName = 'logo-monochrome';
    width = height * 5;
  } else if (theme === 'dark') {
    fileName += '-dark';
  } else if (theme === 'light') {
    fileName += '-light';
  }
  fileName += '.svg';

  return (
    <div className={`goodwin-logo-container ${className}`} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <Image
        src={`/brand/${fileName}`}
        alt="Goodwin Grow AI Logo"
        width={width}
        height={height}
        style={{ width: 'auto', height: `${height}px` }}
        priority
      />
    </div>
  );
};
