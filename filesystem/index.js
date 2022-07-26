const fs = require('fs');
const path = require('path');

const ini = path.resolve(__dirname, 'notes.txt');
const data = fs.readFileSync(ini, 'UTF-8');
console.log(data);
console.log(ini);

//STREAM READABLE
const readableStream = fs.createReadStream('./article.txt', {highWaterMark: 10});

readableStream.on('readable', () => {
    try{
        process.stdout.write(`[${readableStream.read()}]`)
    } catch(error){

    }
})

readableStream.on('end', () => {
    console.log('Done');
})

//STREAM WRITEABLE
const writeableStream = fs.createWriteStream('output.txt');
writeableStream.write('Ini merupakan teks baris pertama!\n');
writeableStream.write('Ini merupakan teks baris kedua!\n');
writeableStream.end('Akhir dari writable stream!');