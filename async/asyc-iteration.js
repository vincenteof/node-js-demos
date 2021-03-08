const asyncOp = (arrElem, fn) => {
  setTimeout(() => fn(arrElem), Math.random() * 10)
}

const array = [1, 2, 3, 4, 5]

const next = (idx, len, cb) => {
  if (idx < len) {
    asyncOp(array[idx], (val) => {
      console.log(val)
      next(idx + 1, len, cb)
    })
  } else {
    cb()
  }
}

next(0, array.length, () => {
  console.log('iteration over')
})
