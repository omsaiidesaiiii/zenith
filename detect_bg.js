const sharp = require('sharp');
const path = require('path');

// Next.js 15/16 might have different sharp location or requires it to be imported differently if strictly ESM, 
// but require('sharp') usually works in a CJS script.
// If the project is type module (package.json didn't have "type": "module" explicitly, let's check),
// I'll try generic require.

const imagePath = path.join(__dirname, 'public', 'ezgif-frame-001.jpg');

async function getBgColor() {
  try {
    const { data } = await sharp(imagePath)
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    // Top-left pixel (0,0) is at index 0, 1, 2
    const r = data[0];
    const g = data[1];
    const b = data[2];
    
    const hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    console.log(`DETECTED_BG: ${hex}`);
  } catch (err) {
    console.error("Error:", err);
  }
}

getBgColor();
