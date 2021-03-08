const http = require('http')

const options = {
  hostname: 'localhost',
  port: 8124,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain',
  },
}

const request = http.request(options, (res) => {
  res.setEncoding('utf8')
  res.on('data', (chunk) => {
    console.log(`响应主体: ${chunk}`)
  })
  res.on('end', () => {
    console.log('响应中已无数据')
  })
})

request.write('Hello World')
request.end()
