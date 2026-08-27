const fs = require('fs');
const path = require('path');
const [,, name, data] = process.argv;
const base64 = data.replace(/^data:image\/\w+;base64,/, '');
const outPath = path.join(__dirname, '..', 'public', 'screenshots', `${name}.jpg`);
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, Buffer.from(base64, 'base64'));
console.log('Saved:', outPath, fs.statSync(outPath).size, 'bytes');
