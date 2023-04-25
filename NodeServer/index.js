const http = require("node:http");

const server = http.createServer((req, res) => {
    const superHero = {
        firstName: "Bruce",
        lastName: "Wayne"
    }
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(superHero));
});

server.listen(4000, () => {
    console.log("Server running on port 4000");
})
