const fs = require('fs');
const pdfParse = require('pdf-parse');
let dataBuffer = fs.readFileSync('Lokesh MCA Resume.pdf');
pdfParse(dataBuffer).then(function(data) {
    console.log(data.text);
});
