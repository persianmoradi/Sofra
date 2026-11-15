import type { Country } from './types';

// 80x80 tiles, stroke-only, drawn in the country's accent colour.
const tiles: Record<Country['pattern'], string> = {
  // eight-pointed khatam star
  iran: `<path d="M20 20h40v40H20zM40 8l32 32-32 32L8 40z"/><circle cx="40" cy="40" r="8"/>`,
  // tulip
  turkey: `<path d="M40 12C28 24 28 40 40 54 52 40 52 24 40 12zM40 54C24 48 20 30 27 22c3 12 8 22 13 32zM40 54c16-6 20-24 13-32-3 12-8 22-13 32zM40 54v18"/>`,
  // overlapping-circle lattice
  morocco: `<circle cx="0" cy="0" r="28"/><circle cx="80" cy="0" r="28"/><circle cx="0" cy="80" r="28"/><circle cx="80" cy="80" r="28"/><circle cx="40" cy="40" r="28"/>`,
  // lotus
  egypt: `<path d="M40 14c12 14 12 30 0 46C28 44 28 28 40 14zM40 60C22 56 14 42 14 28c14 2 22 14 26 32zM40 60c18-4 26-18 26-32-14 2-22 14-26 32zM20 68h40"/>`,
  // cedar
  lebanon: `<path d="M40 8l14 18h-7l11 16h-9l14 18H18l13-18h-9l11-16h-7zM40 60v14"/>`,
  // pointed-arch scales
  syria: `<path d="M0 40Q20 0 40 40T80 40M0 80Q20 40 40 80T80 80"/><circle cx="40" cy="14" r="2"/><circle cx="0" cy="54" r="2"/><circle cx="80" cy="54" r="2"/>`,
  // ziggurat
  iraq: `<path d="M8 70h64V58H62V46H52V34H28v12H18v12H8zM40 14v20"/>`,
  // tatreez cross-stitch diamond, generated below
  palestine: '',
};

function tatreez() {
  const s = 6, o = 20;
  let d = '';
  for (let x = 0; x < 7; x++)
    for (let y = 0; y < 7; y++) {
      const m = Math.abs(x - 3) + Math.abs(y - 3);
      if (m === 3 || (m === 0) || (m === 1 && (x + y) % 2 === 1)) {
        const px = o + x * s, py = o + y * s;
        d += `M${px} ${py}l${s - 1} ${s - 1}M${px + s - 1} ${py}l${-(s - 1)} ${s - 1}`;
      }
    }
  return `<path d="${d}"/>`;
}

export function patternUri(key: Country['pattern'], color: string, opacity = 0.5, sw = 1.2) {
  const body = key === 'palestine' ? tatreez() : tiles[key];
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none" ` +
    `stroke="${color}" stroke-opacity="${opacity}" stroke-width="${sw}" stroke-linejoin="round" stroke-linecap="round">${body}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

export function themeVars(c: Country) {
  const t = c.theme;
  return (
    `--base:${t.base};--b1:${t.b1};--b2:${t.b2};--b3:${t.b3};--accent:${t.accent};` +
    `--pattern:${patternUri(c.pattern, t.accent)};--medallion:${patternUri(c.pattern, t.accent, 0.8, 0.5)}`
  );
}
