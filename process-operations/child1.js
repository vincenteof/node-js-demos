console.log('child1 starts')

process.on('SIGTERM', function () {
  console.log('receive SIGTERM')
  process.exit(0)
})
