// server.js
"use strict";
const http = require("http");
http.createServer((req, res) => {
    // 1. The ​server.js​ file must require an external module that you have created.
    const quotes = require('./quotes')
    const index = Math.floor(Math.random() * quotes.length)
    console.log(index);
    const randomQuote = quotes[index];
    console.log(randomQuote);
    // 3. Has to send a random quote from the list to the front-end.
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>Node Lab</h1>")
    res.write("<b>Random Quote: </b>" + randomQuote);
    res.write("<p><em>Random quote index: </em> </p>" + index);
    res.end();
}).listen(3000);

console.log("http://localhost:" + 3000)