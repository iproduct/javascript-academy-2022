const http = require('http');
const fs = require('fs/promises');
const url = require('url')
const host = '127.0.0.1';
const port = 3000;

const countries = {
  'Bulgaria': 'Sofia',
  'USA': 'Washington, D.C.'
}

const server = http.createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  res.writeHead(200, { 'Content-Type': 'application/json' })
  // res.end(JSON.stringify(countries))

});

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(() => {
      server.close();
      server.listen(port, host);
    }, 5000);
  } else {
    console.log('Error starting server:', err);
  }
});

fs.readFile(`${__dirname}/db.json`).then(data => {
  const db = JSON.parse(data);

  const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end(JSON.stringify(countries))
    const pathname = url.parse(req.url, true).pathname
    if (req.method === 'GET')
      if (pathname.slice(1) === 'api/posts') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(db.posts));
      } else {
        res.writeHead(404, {})
        res.end();
      }
  });

  server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
      console.log('Address in use, retrying...');
      setTimeout(() => {
        server.close();
        server.listen(port, host);
      }, 5000);
    } else {
      console.log('Error starting server:', err);
    }
  });

  server.listen(port, host, () => {
    console.log(`HTTP Server running on http://${host}:${port}/`);
  });
}).catch(err => console.log(err));


