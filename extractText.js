import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdfParse = require('pdf-parse');

let dataBuffer = fs.readFileSync('Lokesh MCA Resume.pdf');
pdfParse(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(console.error);
