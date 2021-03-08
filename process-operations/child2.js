process.on('message', function (msg) {
  console.log('CHILD get message: ', msg)
})

process.send({ foo: 'bar' })
