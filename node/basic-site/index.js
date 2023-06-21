const http = require("http");
const fs = require("fs");

const loadPageFromFile = (fileName, res) => {
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
};

http
  .createServer((req, res) => {
    console.log(`requested: |${req.url}|`);
    let path = req.url;

    if (path === "/") {
      loadPageFromFile("./index.html", res);
    } else if (path === "/about") {
      loadPageFromFile("./about.html", res);
    } else if (path === "/contact-me") {
      loadPageFromFile("./contact-me.html", res);
    } else {
      loadPageFromFile("./404.html", res);
    }
  })
  .listen(8080, () => {
    console.log("server started - listening on port 8080");
  });
