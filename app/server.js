const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end(`Hello from a Kubernetes!\nPod Name: ${os.hostname()}`);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
