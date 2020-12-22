const unique = (array) => {
  var container = {}
  return array.filter((item, index) =>
    container.hasOwnProperty(item) ? false : (container[item] = true)
  )
}

const unique1 = (arr) => arr.filter((e, i) => arr.indexOf(e) === i)

const unique2 = (arr) => Array.from(new Set(arr))

const unique3 = (arr) => [...new Set(arr)]
