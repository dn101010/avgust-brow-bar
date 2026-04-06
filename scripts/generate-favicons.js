const sharp = require('sharp');

// SVG only flower (paths 1 and 2 from logo.svg, without text paths)
const flowerSvg = `<svg width="512" height="512" viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
<path d="M170.074 0.0203522C178.789 -0.255762 184.794 2.2833 188.052 7.29051C191.126 12.0146 191.104 18.0177 190.2 23.2456C189.815 25.4765 189.114 31.5725 188.459 33.6821C190.738 32.016 197.395 28.4886 200.025 27.1233C205.26 24.4068 211.771 23.3759 217.862 24.8899C224.21 26.4679 229.282 31.5379 232.576 40.5622C235.707 49.1361 234.927 55.9192 230.889 60.8445C227.071 65.5019 218.502 68.4571 212.754 69.5199C208.297 70.344 201.74 70.7564 197.761 70.7096C199.953 72.632 202.29 74.8481 204.421 77.2109C207.721 80.8694 212.175 86.6854 212.754 92.662C213.275 94.996 213.816 98.3061 212.754 100.704C211.691 103.102 209.76 105.048 207.133 106.555C196.212 112.825 187.736 114.92 181.156 113.642C174.284 112.307 168.988 103.812 166.922 98.6878C166.133 96.732 165.581 94.6736 165.199 92.6374C164.91 93.089 164.609 93.5391 164.296 93.9852C161.593 97.8412 154.631 105.428 149.63 107.481C144.513 109.582 138.466 109.693 131.568 106.853C126.269 104.671 122.294 102.364 119.536 99.8903C116.75 97.3918 115.042 94.5658 114.728 91.4428C114.134 85.541 118.469 81.2888 120.115 78.9609C121.749 76.6495 124.338 75.056 126.779 73.2677C128.25 72.1899 129.833 71.1706 131.459 70.2168C126.215 69.5538 115.707 68.0493 111.72 63.5395C107.599 58.8789 105.723 52.0477 106.798 42.6845C108.148 30.9384 111.757 23.5821 117.8 20.6025C123.815 17.6372 135.483 19.4624 140.857 22.4509C143.954 24.1729 146.957 26.3484 149.665 28.5722C149.465 27.6857 149.423 22.9088 149.29 22.004C148.591 17.2519 148.866 11.775 152.179 7.35924C155.567 2.84356 161.471 0.292954 170.074 0.0203522ZM179.211 46.5227C179.211 46.5227 202.089 6.31455 170.055 7.32945L169.314 7.35906C138.379 8.87727 159.127 42.6202 159.166 42.6845C159.106 42.6128 120.457 -3.25801 115.18 42.6845L115.094 43.4958C111.801 77.4653 152.179 64.7704 152.179 64.7704C152.179 64.7704 95.3093 83.0769 136.141 99.8903C160.712 110.008 168.313 76.5817 168.313 76.5817C168.313 76.5817 161.324 124.373 203.97 99.8903C221.104 90.0537 186.835 66.4775 186.835 66.4775C186.875 66.4835 236.382 74.0516 224.93 42.6845C212.72 9.24407 179.211 46.5227 179.211 46.5227Z" fill="black"/>
<path d="M176 56.5C176 54.2738 174.5 51 170 51C165.207 51 164 54.2738 164 56.5C164 58.7262 166.684 61 170 61V63C165.858 63 162.5 60.0899 162.5 56.5C162.5 52.9101 165.858 50 170 50C174.142 50 177.5 52.9101 177.5 56.5C177.5 60.0899 174.142 63 170 63V61C173.316 61 176 58.7262 176 56.5Z" fill="black"/>
</svg>`;

async function generate() {
  const configs = [
    { size: 16, name: 'favicon-16x16.png', padding: 1, transparent: true },
    { size: 32, name: 'favicon-32x32.png', padding: 2, transparent: true },
    { size: 180, name: 'apple-touch-icon.png', padding: 27, transparent: false },
    { size: 192, name: 'icon-192.png', padding: 19, transparent: true },
    { size: 512, name: 'icon-512.png', padding: 51, transparent: true },
  ];

  for (const { size, name, padding, transparent } of configs) {
    const bg = transparent
      ? { r: 0, g: 0, b: 0, alpha: 0 }
      : { r: 250, g: 247, b: 242, alpha: 1 };

    await sharp(Buffer.from(flowerSvg))
      .resize(size - padding * 2, size - padding * 2, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .extend({ top: padding, bottom: padding, left: padding, right: padding, background: bg })
      .png()
      .toFile(`public/${name}`);

    console.log(`Generated ${name} (${size}x${size})`);
  }

  // favicon.ico workaround: generate as PNG (browsers accept PNG favicons)
  await sharp(Buffer.from(flowerSvg))
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('public/favicon.png');

  console.log('Generated favicon.png');

  // OG image 1200x630
  const ogSvg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#FAF7F2"/>
    <g transform="translate(450, 80) scale(1.25)">
      ${flowerSvg.replace(/<svg[^>]*>/, '').replace('</svg>', '')}
    </g>
    <text x="600" y="400" text-anchor="middle" font-family="Georgia, serif" font-size="72" font-weight="300" fill="#2A2420">Август</text>
    <text x="600" y="460" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="300" fill="#8A857E">Студия бровей и ресниц</text>
    <text x="600" y="500" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="300" fill="#C5A47E">Хамовники, Москва</text>
  </svg>`;

  await sharp(Buffer.from(ogSvg))
    .jpeg({ quality: 90 })
    .toFile('public/og-image.jpg');

  console.log('Generated og-image.jpg (1200x630)');
}

generate().catch(console.error);
