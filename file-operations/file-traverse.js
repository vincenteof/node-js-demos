const fs = require('fs')
const path = require('path')

function traverseSync(dir, cb) {
  fs.readdirSync(dir).forEach((file) => {
    const pathname = path.join(dir, file)
    if (
      fs.statSync(pathname).isDirectory() &&
      !pathname.includes('node_modules')
    ) {
      traverseSync(pathname, cb)
    } else {
      cb(pathname)
    }
  })
}

function traverse(dir, cb, finished) {
  fs.readdir(dir, (err, files) => {
    function next(i) {
      if (i < files.length) {
        const pathname = path.join(dir, files[i])
        if (!pathname.includes('node_modules')) {
          fs.stat(pathname, (err, stats) => {
            if (stats.isDirectory()) {
              traverse(pathname, cb, () => next(i + 1))
            } else {
              cb(pathname, () => next(i + 1))
            }
          })
        }
      } else {
        finished && finished()
      }
    }
    next(0)
  })
}

function test() {
  // traverseSync('../', (name) => console.log(name))
  traverse('../', (name, cb) => {
    console.log(name)
    cb()
  })
}

test()
