const child_process = require('child_process')

const child = child_process.spawn('node', ['process-operations/child2.js'], {
  stdio: [0, 1, 2, 'ipc'],
})

// nodejs 里如果是 rpc 通信，父进程调用子进程的 send 会发送到子进程
// 子进程调用 process.send 会发送到父进程
child.on('message', function (msg) {
  console.log('PARENT get message: ', msg)
})

child.send({ hello: 'hello' })
