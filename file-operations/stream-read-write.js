const fs = require('fs')

function copy(src, dest) {
  // fs.createReadStream(src).pipe(fs.createWriteStream(dest))
  myPipe(src, dest)
}

function main(argv) {
  copy(argv[0], 'stream-read-write-' + argv[1])
}

// what pipe really does
function myPipe(src, dest) {
  const rs = fs.createReadStream(src)
  const ws = fs.createWriteStream(dest)
  rs.on('data', function (chunk) {
    if (ws.write(chunk) === false) {
      rs.pause()
    }
  })
  rs.on('end', function () {
    ws.end()
  })
  // http://nodejs.cn/api/stream/event_drain.html
  ws.on('drain', function () {
    rs.resume()
  })
}

main(process.argv.slice(2))
