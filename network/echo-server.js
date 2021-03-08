const http = require('http')

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    req.on('data', (chunk) => {
      res.write(chunk)
    })
    req.on('end', () => {
      res.end()
    })
  })
  .listen(8124)
