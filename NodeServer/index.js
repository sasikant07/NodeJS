const http = require("node:http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World");
});

server.listen(9000, () => {
    console.log("Server running on port 5000");
})
