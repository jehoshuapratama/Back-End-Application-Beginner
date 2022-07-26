/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require('fs');
const path = require('path');
const ini = path.resolve(__dirname, 'input.txt');
const readableStream = fs.createReadStream(ini, {highWaterMark: 15});
const writeableStream = fs.createWriteStream('output.txt');
readableStream.on('readable', () => {
    try{
        writeableStream.write(readableStream.read()+'\n');
    } catch(error){

    }
})

readableStream.on('end', () => {
    writeableStream.end();
    console.log('Done');
})