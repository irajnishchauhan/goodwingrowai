const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components');

const replaceInFile = (filePath) => {
  const ext = path.extname(filePath);
  if (['.tsx', '.ts'].includes(ext)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace text-white variations with semantic foreground (which is black in light theme)
    // ONLY when it's not explicitly over a dark background where white is needed.
    // However, since we want a pure light theme and are replacing all background videos with light versions or white overlays,
    // we can safely change almost all text-white to text-foreground.
    
    // We will leave text-white on Buttons (like GlowButton bg-primary text-white).
    
    content = content.replace(/text-white\/([0-9]+)/g, 'text-foreground/$1');
    content = content.replace(/bg-white\/([0-9]+)/g, 'bg-foreground/$1');
    content = content.replace(/border-white\/([0-9]+)/g, 'border-foreground/$1');
    
    // The main issue might be in `Navbar.tsx` or similar components where standard text color was hardcoded.
    // Just in case there are plain text-white (not in GlowButton or Showreel overlay):
    // Wait, let's just make the text explicitly text-foreground everywhere except inside specific elements.
    // Instead of regex, a better approach for the user's issue ("fonts are not visible") is ensuring the sections themselves 
    // are not forcing a dark mode color.
    
    // Some components use `bg-black` which is fine if text is white. But if text is `text-foreground` (black), it's invisible.
    content = content.replace(/bg-black(?![\w\-\/])/g, 'bg-background');
    content = content.replace(/bg-black\/([0-9]+)/g, 'bg-foreground/$1');
    content = content.replace(/from-black/g, 'from-background');
    content = content.replace(/via-black/g, 'via-background');
    content = content.replace(/to-black/g, 'to-background');

    fs.writeFileSync(filePath, content, 'utf8');
  }
};

const walkSync = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkSync(fullPath);
    } else {
      replaceInFile(fullPath);
    }
  }
};

walkSync(componentsDir);
console.log('Finished normalizing colors to light theme');
