const path = require("node:path");
// OR
// const path = require("path");


// check the whole path
console.log(__filename);        //  /Users/sasikant/Workspace/NodeJS/Path/index.js
console.log(__dirname);        //   /Users/sasikant/Workspace/NodeJS/Path

// check last file name
console.log(path.basename(__filename));         // index.js
console.log(path.basename(__dirname));          // Path


// Check Extension of the file
console.log(path.extname(__filename));         // .js
console.log(path.extname(__dirname));          //   empty


// check significant element of path
console.log(path.parse(__filename));         // index.js
// --> O/P
/*
{
    root: '/',
    dir: '/Users/sasikant/Workspace/NodeJS/Path',
    base: 'index.js',
    ext: '.js',
    name: 'index'
  }

  */
console.log(path.format(path.parse(__filename)));       //  /Users/sasikant/Workspace/NodeJS/Path/index.js


// returns whether Path is absolute or not
console.log(path.isAbsolute(__filename));       // true
console.log(path.isAbsolute("./data.json"));       // false


// Joins all given segments together
console.log(path.join("folder1", "folder2", "index.html"));         // folder1/folder2/index.html
console.log(path.join("/folder1", "folder2", "index.html"));        // /folder1/folder2/index.html
console.log(path.join("/folder1", "//folder2", "index.html"));      // /folder1/folder2/index.html
console.log(path.join("/folder1", "//folder2", "../index.html"));   // /folder1/index.html
console.log(path.join(__dirname, "data.json"));         // /Users/sasikant/Workspace/NodeJS/Path/data.json



// Resolve sequence of paths into an absolute path
console.log(path.resolve("folder1", "folder2", "index.html"));          // /Users/sasikant/Workspace/NodeJS/Path/folder1/folder2/index.html
console.log(path.resolve("/folder1", "folder2", "index.html"));         // /folder1/folder2/index.html
console.log(path.resolve("/folder1", "//folder2", "index.html"));       // /folder2/index.html
console.log(path.resolve("/folder1", "//folder2", "../index.html"));    // /index.html
console.log(path.resolve(__dirname, "data.json"));                      // /Users/sasikant/Workspace/NodeJS/Path/data.json