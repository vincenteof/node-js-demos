const asyncOp = (arrElem, fn) => {
  setTimeout(() => fn(arrElem), Math.random() * 10)
}

const array = [1, 2, 3, 4, 5]

;(function (i, len, count, cb) {
  for (; i < len; i++) {
    ;(function (idx) {
      asyncOp(array[idx], function (val) {
        console.log(val)
        count++
        if (count === len) {
          cb()
        }
      })
    })(i)
  }
})(0, array.length, 0, () => console.log('iteration over'))
