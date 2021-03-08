const http = require('http')
const zlib = require('zlib')

const options = {
  hostname: 'localhost',
  port: 8124,
  path: '/',
  method: 'GET',
  headers: {
    'Accept-Encoding': 'gzip, deflate',
  },
}

http
  .request(options, (res) => {
    let body = []
    res.on('data', (chunk) => {
      body.push(chunk)
    })
    res.on('end', () => {
      body = Buffer.concat(body)
      if (res.headers['content-encoding'] === 'gzip') {
        zlib.gunzip(body, (err, data) => {
          console.log(data.toString())
        })
      } else {
        console.log(data.toString())
      }
    })
  })
  .end()
