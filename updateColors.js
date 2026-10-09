const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components');

const replaceInFile = (filePath) => {
  const ext = path.extname(filePath);
  if (['.tsx', '.ts'].includes(ext)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace plain black text/bg/border
    content = content.replace(/text-black/g, 'text-foreground');
    content = content.replace(/bg-black/g, 'bg-foreground');
    content = content.replace(/border-black/g, 'border-foreground');
    
    // Replace white with background if necessary, but actually in dark mode background is dark. 
    // If they were using white for contrast, it might need to be foreground.
    content = content.replace(/bg-white/g, 'bg-background');
    content = content.replace(/text-white/g, 'text-foreground');
    
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
console.log('Finished updating colors');
