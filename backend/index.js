// backend/index.js
const http = require("http");

// Skenario Buruk: Hardcoded Secret (Gitleaks akan mendeteksi ini)
const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Hello from Secure Backend!" }));
});

server.listen(3000, () => console.log("Backend berjalan di port 3000"));
