const fs = require("node:fs");

// To read the file synchronously
const fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContents);      // Hello Codevolution

// Read file asynchronously
fs.readFile("./file.txt", "utf-8", (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});


// Write file synchronously
fs.writeFileSync("./greet.txt", "Hello World!");


// Write file asynchronously
fs.writeFile("./greet.txt", " Hello Vishwas!", {flag: "a"}, (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log("File Witten");
    }
});