const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function makeRound() {
  const inputPath = path.join(__dirname, 'public', 'assets', 'logo.png');
  const tempPath = path.join(__dirname, 'public', 'assets', 'logo_temp.png');
  
  const metadata = await sharp(inputPath).metadata();
  const width = Math.min(metadata.width, metadata.height);
  const r = width / 2;

  const circleSvg = `<svg width="${width}" height="${width}">
      <circle cx="${r}" cy="${r}" r="${r}" />
    </svg>`;

  await sharp(inputPath)
    .resize(width, width, { fit: 'cover' })
    .composite([{
      input: Buffer.from(circleSvg),
      blend: 'dest-in'
    }])
    .png()
    .toFile(tempPath);
    
  fs.copyFileSync(tempPath, inputPath);
  fs.unlinkSync(tempPath);
  console.log('Done rounding logo');
}

makeRound().catch(console.error);
