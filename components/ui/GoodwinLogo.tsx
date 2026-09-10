import React from 'react';

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
  // Theme color resolution
  const isMono = theme === 'monochrome';
  const isLight = theme === 'light';
  
  const primaryColor = isMono ? 'currentColor' : (isLight ? '#05070B' : '#FFFFFF');
  const accentColor = isMono ? 'currentColor' : '#7C5CFF'; // Electric Violet

  // Size resolution
  const sizeMap = {
    sm: { icon: 24, text: 14 },
    md: { icon: 32, text: 20 },
    lg: { icon: 48, text: 28 },
    xl: { icon: 80, text: 40 },
  };

  const { icon: iconSize, text: textSize } = sizeMap[size];

  // The Abstract Geometric 'G' + Growth Arrow Symbol
  const Symbol = () => (
    <svg 
      width={iconSize} 
      height={iconSize} 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="goodwin-logo-symbol"
      style={{ overflow: 'visible', flexShrink: 0 }}
    >
      {/* Outer G Ring */}
      <path 
        d="M 32 8 C 18.7 8 8 18.7 8 32 C 8 45.3 18.7 56 32 56 C 41 56 48.5 51 52.5 44" 
        stroke={primaryColor} 
        strokeWidth="7" 
        strokeLinecap="round" 
        className="goodwin-logo-path"
      />
      {/* Inner Crossbar shooting upwards into an arrow */}
      <path 
        d="M 28 32 L 42 32 L 56 18" 
        stroke={accentColor} 
        strokeWidth="7" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="goodwin-logo-accent"
      />
      {/* Arrow Head */}
      <path 
        d="M 44 18 L 56 18 L 56 30" 
        stroke={accentColor} 
        strokeWidth="7" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="goodwin-logo-accent"
      />
      {/* Subtle Data Node Dot */}
      <circle cx="24" cy="32" r="3.5" fill={primaryColor} />
    </svg>
  );

  // The Typography Mark
  const Wordmark = () => (
    <div style={{ display: 'flex', flexDirection: variant === 'stacked' ? 'column' : 'row', alignItems: variant === 'stacked' ? 'flex-start' : 'center', gap: variant === 'stacked' ? '0' : '0.5em', lineHeight: 1 }}>
      <span style={{ 
        fontFamily: 'var(--font-sans)', 
        fontWeight: 800, 
        fontSize: textSize, 
        letterSpacing: '-0.02em',
        color: primaryColor 
      }}>
        GOODWIN
      </span>
      <span style={{ 
        fontFamily: 'var(--font-sans)', 
        fontWeight: 400, 
        fontSize: variant === 'stacked' ? textSize * 0.85 : textSize, 
        letterSpacing: '0.05em',
        color: isMono ? 'currentColor' : 'var(--muted)',
        marginLeft: variant === 'stacked' ? '0.1em' : '0'
      }}>
        GROW <span style={{ color: accentColor, fontWeight: 700 }}>AI</span>
      </span>
    </div>
  );

  if (variant === 'icon') {
    return (
      <div className={`goodwin-logo-container ${className}`} style={{ display: 'inline-flex' }}>
        <Symbol />
      </div>
    );
  }

  return (
    <div 
      className={`goodwin-logo-container ${className}`} 
      style={{ 
        display: 'inline-flex', 
        alignItems: variant === 'stacked' ? 'flex-start' : 'center', 
        gap: size === 'xl' ? '1.5rem' : '0.75rem',
        flexDirection: variant === 'stacked' ? 'column' : 'row'
      }}
    >
      <Symbol />
      <Wordmark />
    </div>
  );
};
