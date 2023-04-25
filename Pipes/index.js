const fs = require("node:fs");
const zlib = require("node:zlib");      // to create a zipped file

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("./file.txt", {
    encoding: "utf-8",
})

const writableStream = fs.createWriteStream("./file2.txt");

// chaining pipes
readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));

readableStream.pipe(writableStream);