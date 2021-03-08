const child_process = require('child_process')

const child = child_process.spawn('node', ['process-operations/test.js'])

child.stdout.on('data', (data) => {
  console.log('stdout: ', data.toString())
})

child.stderr.on('data', (data) => {
  console.log('stderr: ', data.toString())
})

child.on('close', (code) => {
  console.log('child process exited with code: ', code)
})
