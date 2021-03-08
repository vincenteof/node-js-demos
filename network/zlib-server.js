const http = require('http')
const zlib = require('zlib')

http
  .createServer((req, res) => {
    let i = 1024
    let data = ''
    while (i--) {
      data += '.'
    }
    if ((req.headers['accept-encoding'] || '').includes('gzip')) {
      zlib.gzip(data, (err, data) => {
        res.writeHead(200, {
          'Content-Type': 'text/plain',
          'Content-Encoding': 'gzip',
        })
        res.end(data)
      })
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      })
      res.end(data)
    }
  })
  .listen(8124)
