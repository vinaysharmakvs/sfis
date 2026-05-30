const fs = require("fs");
const zlib = require("zlib");

const width = 1400;
const height = 900;

function crc32(buf) {
  let table = crc32.table;
  if (!table) {
    table = crc32.table = Array.from({ length: 256 }, (_, n) => {
      let c = n;
      for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      return c >>> 0;
    });
  }
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i += 1) c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type);
  const len = Buffer.alloc(4);
  const crc = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crc]);
}

function writePng(file, painter) {
  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y += 1) {
    raw[y * (width * 4 + 1)] = 0;
    for (let x = 0; x < width; x += 1) {
      const [r, g, b, a = 255] = painter(x / width, y / height, x, y);
      const i = y * (width * 4 + 1) + 1 + x * 4;
      raw[i] = r;
      raw[i + 1] = g;
      raw[i + 2] = b;
      raw[i + 3] = a;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  const png = Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", zlib.deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
  fs.writeFileSync(file, png);
}

const mix = (a, b, t) => Math.round(a + (b - a) * t);
const rect = (x, y, x1, y1, x2, y2) => x >= x1 && x <= x2 && y >= y1 && y <= y2;
const circle = (x, y, cx, cy, r) => (x - cx) ** 2 + (y - cy) ** 2 <= r ** 2;

function campus(x, y) {
  const skyT = Math.min(y / 0.6, 1);
  let color = [mix(126, 236, skyT), mix(190, 232, skyT), mix(215, 206, skyT)];
  if (y > 0.63) color = [42, mix(122, 149, (y - 0.63) / 0.37), 76];
  if (circle(x, y, 0.78, 0.18, 0.055)) color = [244, 179, 69];
  if (rect(x, y, 0.14, 0.34, 0.86, 0.68)) color = [236, 220, 181];
  if (rect(x, y, 0.19, 0.42, 0.81, 0.68)) color = [247, 238, 208];
  if (rect(x, y, 0.44, 0.24, 0.56, 0.68)) color = [196, 72, 58];
  if (rect(x, y, 0.47, 0.51, 0.53, 0.68)) color = [44, 83, 91];
  if (rect(x, y, 0.24, 0.48, 0.34, 0.56) || rect(x, y, 0.66, 0.48, 0.76, 0.56)) color = [57, 119, 151];
  if (rect(x, y, 0.37, 0.48, 0.43, 0.56) || rect(x, y, 0.57, 0.48, 0.63, 0.56)) color = [57, 119, 151];
  if (y > 0.72 && Math.abs(x - 0.5) < (y - 0.7) * 0.42) color = [219, 187, 118];
  if (circle(x, y, 0.1, 0.66, 0.12) || circle(x, y, 0.91, 0.64, 0.13)) color = [28, 107, 72];
  return color;
}

function lab(x, y, hue) {
  let color = [mix(221, 248, y), mix(239, 248, y), mix(239, 240, y)];
  if (rect(x, y, 0.12, 0.2, 0.88, 0.74)) color = [237, 240, 232];
  if (rect(x, y, 0.16, 0.26, 0.84, 0.5)) color = hue;
  if (rect(x, y, 0.2, 0.56, 0.8, 0.66)) color = [63, 84, 80];
  if (rect(x, y, 0.24, 0.66, 0.3, 0.83) || rect(x, y, 0.7, 0.66, 0.76, 0.83)) color = [49, 67, 64];
  if (circle(x, y, 0.3, 0.35, 0.035) || circle(x, y, 0.5, 0.35, 0.035) || circle(x, y, 0.7, 0.35, 0.035)) color = [255, 210, 86];
  return color;
}

function robotics(x, y) {
  let color = lab(x, y, [36, 108, 151]);
  if (circle(x, y, 0.5, 0.46, 0.12)) color = [244, 199, 87];
  if (circle(x, y, 0.46, 0.43, 0.018) || circle(x, y, 0.54, 0.43, 0.018)) color = [31, 48, 55];
  if (rect(x, y, 0.43, 0.58, 0.57, 0.72)) color = [232, 94, 69];
  return color;
}

function garden(x, y) {
  let color = [mix(131, 219, y), mix(201, 235, y), mix(221, 213, y)];
  if (y > 0.52) color = [49, mix(128, 154, y), 76];
  if (y > 0.68 && Math.abs(x - 0.5) < (y - 0.6) * 0.45) color = [218, 184, 119];
  for (const cx of [0.18, 0.31, 0.72, 0.84]) {
    if (circle(x, y, cx, 0.58, 0.1)) color = [31, 111, 70];
    if (rect(x, y, cx - 0.012, 0.58, cx + 0.012, 0.82)) color = [111, 74, 45];
  }
  if (rect(x, y, 0.34, 0.28, 0.66, 0.48)) color = [242, 231, 196];
  return color;
}

function sports(x, y) {
  let color = [117, 190, 211];
  if (y > 0.46) color = [44, 127, 73];
  if (rect(x, y, 0.08, 0.52, 0.52, 0.84)) color = [198, 91, 65];
  if (rect(x, y, 0.57, 0.56, 0.92, 0.78)) color = [223, 185, 112];
  if (rect(x, y, 0.62, 0.34, 0.87, 0.39)) color = [45, 70, 74];
  if (rect(x, y, 0.72, 0.39, 0.76, 0.62)) color = [45, 70, 74];
  if (circle(x, y, 0.77, 0.43, 0.055)) color = [238, 238, 232];
  if (circle(x, y, 0.17, 0.64, 0.035)) color = [219, 126, 48];
  if (rect(x, y, 0.1, 0.75, 0.5, 0.765) || rect(x, y, 0.29, 0.52, 0.305, 0.84)) color = [255, 244, 217];
  return color;
}

function circuit(x, y) {
  let color = [7, 17, 15];
  const glow = Math.max(
    0,
    1 - Math.hypot(x - 0.18, y - 0.2) * 2.4,
    1 - Math.hypot(x - 0.82, y - 0.3) * 2.1,
    1 - Math.hypot(x - 0.52, y - 0.78) * 2.2
  );
  color = [Math.round(7 + glow * 28), Math.round(17 + glow * 92), Math.round(15 + glow * 74)];
  const gridX = Math.abs((x * 18) % 1 - 0.5);
  const gridY = Math.abs((y * 12) % 1 - 0.5);
  if (gridX < 0.012 || gridY < 0.012) color = [18, 76, 66];
  for (const [cx, cy, r] of [
    [0.16, 0.22, 0.035],
    [0.32, 0.42, 0.025],
    [0.58, 0.28, 0.03],
    [0.78, 0.62, 0.04],
    [0.5, 0.72, 0.028],
  ]) {
    if (circle(x, y, cx, cy, r)) color = [51, 241, 194];
    if (circle(x, y, cx, cy, r * 0.45)) color = [255, 207, 90];
  }
  if (Math.abs(y - (0.18 + x * 0.24)) < 0.004 && x > 0.1 && x < 0.62) color = [51, 241, 194];
  if (Math.abs(y - (0.84 - x * 0.26)) < 0.004 && x > 0.34 && x < 0.9) color = [168, 255, 122];
  if (Math.abs(x - 0.68) < 0.005 && y > 0.2 && y < 0.76) color = [88, 184, 255];
  return color;
}

writePng("assets/stone-field-campus.png", campus);
writePng("assets/computer-lab.png", (x, y) => lab(x, y, [31, 111, 145]));
writePng("assets/robotics-lab.png", robotics);
writePng("assets/gardens.png", garden);
writePng("assets/sports-campus.png", sports);
writePng("assets/circuit-campus.png", circuit);
