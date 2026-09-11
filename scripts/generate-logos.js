const fs = require('fs');
const path = require('path');

const BRAND_DIR = path.join(__dirname, '../public/brand');

if (!fs.existsSync(BRAND_DIR)) {
  fs.mkdirSync(BRAND_DIR, { recursive: true });
}

const PRIMARY_DARK = '#FFFFFF';
const PRIMARY_LIGHT = '#05070B';
const ACCENT = '#7C5CFF';

const renderSvg = ({ variant, isDark, isMono }) => {
  const primary = isMono ? 'currentColor' : (isDark ? PRIMARY_DARK : PRIMARY_LIGHT);
  const accent = isMono ? 'currentColor' : ACCENT;

  const sizeMap = {
    icon: { w: 64, h: 64, iconSize: 64 },
    horizontal: { w: 320, h: 64, iconSize: 64, textSize: 36, stack: false },
    stacked: { w: 240, h: 140, iconSize: 64, textSize: 36, stack: true }
  };

  const config = sizeMap[variant];

  const symbol = `
    <g transform="translate(${config.stack ? (config.w - config.iconSize)/2 : 0}, ${config.stack ? 0 : 0})">
      <path d="M 32 8 C 18.7 8 8 18.7 8 32 C 8 45.3 18.7 56 32 56 C 41 56 48.5 51 52.5 44" stroke="${primary}" stroke-width="7" stroke-linecap="round" fill="none" />
      <path d="M 28 32 L 42 32 L 56 18" stroke="${accent}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      <path d="M 44 18 L 56 18 L 56 30" stroke="${accent}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      <circle cx="24" cy="32" r="3.5" fill="${primary}" />
    </g>
  `;

  let content = symbol;

  if (variant !== 'icon') {
    const textX = config.stack ? config.w / 2 : config.iconSize + 24;
    const textY1 = config.stack ? config.iconSize + 36 : 42;
    const textY2 = config.stack ? config.iconSize + 36 + 28 : 42;
    const textAnchor = config.stack ? 'middle' : 'start';

    if (config.stack) {
      content += `
        <text x="${textX}" y="${textY1}" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="${config.textSize}" fill="${primary}" letter-spacing="-0.02em" text-anchor="middle">GOODWIN</text>
        <text x="${textX}" y="${textY2}" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="${config.textSize * 0.85}" fill="${isMono ? 'currentColor' : '#9CA3AF'}" letter-spacing="0.05em" text-anchor="middle">GROW <tspan fill="${accent}" font-weight="700">AI</tspan></text>
      `;
    } else {
      content += `
        <text x="${textX}" y="${textY1}" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="${config.textSize}" fill="${primary}" letter-spacing="-0.02em">GOODWIN</text>
        <text x="${textX + 180}" y="${textY1}" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="${config.textSize}" fill="${isMono ? 'currentColor' : '#9CA3AF'}" letter-spacing="0.05em">GROW <tspan fill="${accent}" font-weight="700">AI</tspan></text>
      `;
    }
  }

  return `<svg width="${config.w}" height="${config.h}" viewBox="0 0 ${config.w} ${config.h}" fill="none" xmlns="http://www.w3.org/2000/svg">${content}</svg>`;
};

const files = [
  { name: 'logo-horizontal-dark.svg', opts: { variant: 'horizontal', isDark: true, isMono: false } },
  { name: 'logo-horizontal-light.svg', opts: { variant: 'horizontal', isDark: false, isMono: false } },
  { name: 'logo-horizontal.svg', opts: { variant: 'horizontal', isDark: true, isMono: false } },
  { name: 'logo-stacked-dark.svg', opts: { variant: 'stacked', isDark: true, isMono: false } },
  { name: 'logo-stacked-light.svg', opts: { variant: 'stacked', isDark: false, isMono: false } },
  { name: 'logo-stacked.svg', opts: { variant: 'stacked', isDark: true, isMono: false } },
  { name: 'logo-icon-dark.svg', opts: { variant: 'icon', isDark: true, isMono: false } },
  { name: 'logo-icon-light.svg', opts: { variant: 'icon', isDark: false, isMono: false } },
  { name: 'logo-icon.svg', opts: { variant: 'icon', isDark: true, isMono: false } },
  { name: 'logo-monochrome.svg', opts: { variant: 'horizontal', isDark: false, isMono: true } },
  { name: '../favicon.svg', opts: { variant: 'icon', isDark: true, isMono: false } }
];

files.forEach(file => {
  const svg = renderSvg(file.opts);
  fs.writeFileSync(path.join(BRAND_DIR, file.name), svg.trim());
  console.log('Created', file.name);
});
