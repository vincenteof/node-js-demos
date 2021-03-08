const child_process = require('child_process')

const child = child_process.spawn('node', ['process-operations/child1.js'])
child.stdout.on('data', (data) => {
  console.log('stdout: ', data.toString())
})
child.stderr.on('data', (data) => {
  console.log('stderr: ', data.toString())
})

// 测试会直接杀死自进程，子进程并不能监听到？
setTimeout(() => {
  child.kill('SIGTERM')
}, 1000)
