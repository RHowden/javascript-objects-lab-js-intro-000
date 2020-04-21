  updateObjectWithKeyAndValue = (object, key, value) => {
    var newObj = Object.assign({}, object)
    newObj[key] = value
    return newObj
  }

  destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
    object[key] = value
    return object
  }

  deleteFromObjectByKey = (object, key) => {
    var newObj = Object.assign({}, object)
    delete newObj.[key]

    return newObj
  }

destructivelyDeleteFromObjectByKey = (object, key) => {
  delete object.[key]

  return object
}
