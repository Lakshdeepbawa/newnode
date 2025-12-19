const http = require("http");

http.createServer((req, res) => {
  if (req.method === "GET") {
    res.end("GET request");
  } 
  else if (req.method === "POST") {
    res.end("POST request");
  }
  else if (req.method === "PUT") {
    res.end("PUT request");
  }
  else if (req.method === "DELETE") {
    res.end("DELETE request");
  }
}).listen(3000);