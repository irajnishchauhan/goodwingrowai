const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components');

const replaceInFile = (filePath) => {
  const ext = path.extname(filePath);
  if (['.tsx', '.ts'].includes(ext)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace glass/glow effects with brutalist cards
    content = content.replace(/bg-white\/\[0\.02\]/g, 'bg-card brutalist-card');
    content = content.replace(/bg-white\/5/g, 'bg-card brutalist-card');
    content = content.replace(/bg-black\/\[0\.02\]/g, 'bg-card brutalist-card');
    content = content.replace(/bg-black\/5/g, 'bg-card brutalist-card');
    content = content.replace(/bg-background\/5/g, 'bg-card brutalist-card');
    content = content.replace(/bg-foreground\/5/g, 'bg-card brutalist-card');
    
    // Replace borders
    content = content.replace(/border-white\/5/g, 'border-foreground border');
    content = content.replace(/border-white\/10/g, 'border-foreground border');
    content = content.replace(/border-black\/5/g, 'border-foreground border');
    content = content.replace(/border-black\/10/g, 'border-foreground border');
    content = content.replace(/border-white\/20/g, 'border-foreground border');
    content = content.replace(/border-black\/20/g, 'border-foreground border');
    content = content.replace(/border-foreground\/5/g, 'border-foreground border');
    content = content.replace(/border-foreground\/10/g, 'border-foreground border');
    
    // Specific rounded corners for brutalist feel
    content = content.replace(/rounded-xl/g, 'rounded-[20px]');
    content = content.replace(/rounded-2xl/g, 'rounded-[30px]');
    content = content.replace(/rounded-3xl/g, 'rounded-[45px]');
    
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
console.log('Finished applying brutalist styles');
