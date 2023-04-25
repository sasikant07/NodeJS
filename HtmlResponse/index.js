const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream(__dirname + "/index.html").pipe(res);   // to avoid un-necessary buffer

    // const html = fs.readFileSync("./index.html", "utf-8");
    // res.end(html);
});

server.listen(4000, () => {
    console.log("Server running on port 4000");
})
