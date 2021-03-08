const fs = require('fs')

// 全部读到内存后写
function copy(src, dst) {
  fs.writeFileSync(dst, fs.readFileSync(src))
}

function main(argv) {
  copy(argv[0], 'simple-read-write-' + argv[1])
}

main(process.argv.slice(2))
