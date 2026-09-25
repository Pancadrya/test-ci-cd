const http = require("http");

// Rahasia diambil dari environment, bukan ditulis di kode
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Hello from Secure Backend!" }));
});

server.listen(3000, () => console.log("Backend berjalan di port 3000"));
