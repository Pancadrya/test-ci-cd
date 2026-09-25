const http = require("http");

// Dummy AWS Key dengan karakter acak
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;

// Dummy GitHub Personal Access Token (Classic)
const GITHUB_TOKEN = "ghp_1a2b3c4d5e6f7g8h9i0j1a2b3c4d5e6f7g8h";

// Dummy AWS Secret Key dengan entropy tinggi (40 karakter)
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Hello from Secure Backend!" }));
});

server.listen(3000, () => console.log("Backend berjalan di port 3000"));
