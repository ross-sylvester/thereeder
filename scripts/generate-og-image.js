const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// OG Image SVG (1200x630)
const ogSvgContent = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0a0a"/>
      <stop offset="100%" style="stop-color:#111111"/>
    </linearGradient>
    <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#4ADE50"/>
      <stop offset="100%" style="stop-color:#6EE774"/>
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGradient)"/>
  
  <!-- Decorative glow circles -->
  <circle cx="200" cy="400" r="300" fill="#4ADE50" fill-opacity="0.08"/>
  <circle cx="1000" cy="200" r="250" fill="#4ADE50" fill-opacity="0.05"/>
  
  <!-- Grid pattern (subtle) -->
  <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#4ADE50" stroke-opacity="0.03" stroke-width="1"/>
  </pattern>
  <rect width="1200" height="630" fill="url(#grid)"/>
  
  <!-- Big R Logo -->
  <text x="900" y="360" font-family="system-ui, -apple-system, sans-serif" font-size="280" font-weight="900" fill="#4ADE50" fill-opacity="0.3" text-anchor="middle">R</text>
  <text x="1010" y="180" font-family="system-ui, -apple-system, sans-serif" font-size="40" fill="#4ADE50" fill-opacity="0.3">®</text>
  
  <!-- THE REEDER logo -->
  <text x="60" y="100" font-family="system-ui, -apple-system, sans-serif" font-size="36" font-weight="bold" fill="white" letter-spacing="4">THE REEDER</text>
  
  <!-- Main headline -->
  <text x="60" y="260" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="bold" fill="white">GROW YOUR</text>
  <text x="60" y="350" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="bold" fill="url(#greenGradient)">AUDIENCE</text>
  
  <!-- Subtitle -->
  <text x="60" y="420" font-family="system-ui, -apple-system, sans-serif" font-size="26" fill="#a1a1a1">Content Strategy for B2B Marketing Leaders</text>
  
  <!-- Stats row -->
  <rect x="60" y="470" width="160" height="50" rx="25" fill="#4ADE50" fill-opacity="0.15" stroke="#4ADE50" stroke-opacity="0.3"/>
  <text x="140" y="502" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="#4ADE50" text-anchor="middle">$20M→$200M ARR</text>
  
  <rect x="240" y="470" width="140" height="50" rx="25" fill="#4ADE50" fill-opacity="0.15" stroke="#4ADE50" stroke-opacity="0.3"/>
  <text x="310" y="502" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="#4ADE50" text-anchor="middle">700K+ LinkedIn</text>
  
  <rect x="400" y="470" width="140" height="50" rx="25" fill="#4ADE50" fill-opacity="0.15" stroke="#4ADE50" stroke-opacity="0.3"/>
  <text x="470" y="502" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="#4ADE50" text-anchor="middle">100+ Advised</text>
  
  <!-- Author -->
  <text x="60" y="580" font-family="system-ui, -apple-system, sans-serif" font-size="20" fill="#666666">By Devin Reed • thereeder.co</text>
</svg>`;

// Icon SVG generator (for app icons and favicon)
const iconSvg = (size) => `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="#3a3a3a"/>
  <text x="50%" y="65%" font-family="system-ui, -apple-system, sans-serif" font-size="${size * 0.65}" font-weight="900" fill="#4ADE50" text-anchor="middle" dominant-baseline="middle">R</text>
  <text x="${size * 0.72}" y="${size * 0.2}" font-family="system-ui, -apple-system, sans-serif" font-size="${size * 0.12}" fill="#4ADE50">®</text>
</svg>`;

async function generateImages() {
  try {
    // OG Image (1200x630)
    await sharp(Buffer.from(ogSvgContent))
      .resize(1200, 630)
      .png()
      .toFile(path.join(publicDir, 'og-image.png'));
    console.log('✓ og-image.png generated');

    // App Icon 512x512
    await sharp(Buffer.from(iconSvg(512)))
      .resize(512, 512)
      .png()
      .toFile(path.join(publicDir, 'icon-512.png'));
    console.log('✓ icon-512.png generated');

    // App Icon 192x192
    await sharp(Buffer.from(iconSvg(192)))
      .resize(192, 192)
      .png()
      .toFile(path.join(publicDir, 'icon-192.png'));
    console.log('✓ icon-192.png generated');

    // Apple Touch Icon 180x180
    await sharp(Buffer.from(iconSvg(180)))
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('✓ apple-touch-icon.png generated');

    // Favicon 32x32 PNG
    await sharp(Buffer.from(iconSvg(64)))
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon.png'));
    console.log('✓ favicon.png generated');

    // Favicon ICO (as PNG - browsers accept it)
    await sharp(Buffer.from(iconSvg(64)))
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon.ico'));
    console.log('✓ favicon.ico generated');

    console.log('\n✅ All images generated successfully!');
  } catch (error) {
    console.error('Error generating images:', error);
    process.exit(1);
  }
}

generateImages();
