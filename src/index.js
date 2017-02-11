import _ from 'lodash'

function set(coll, key, value) {
  return {
    ...coll,
    [key]: value
  }
}

export function updateIn(coll, path, fn) {
  if (path.length === 0) {
    return fn(coll)
  }

  let key = path.shift()

  // map with key when in object mode
  if (typeof key === 'object') {
    return _.map(coll, obj => {
      if (_.isMatch(obj, key)) {
        return updateIn(obj, path, fn)
      } else {
        return obj
      }
    })
  } else {
    return {
      ...coll,
      [key]: updateIn(coll[key], path, fn)
    }
  }
}

export function mergeIn(coll, path, value) {
  return updateIn(coll, path, (target) => Object.assign({}, target, value))
}

export function popIn(coll, path) {
  return updateIn(coll, path, (target) => target.slice(0, -1))
}

export function setIn(coll, path, value) {
  return updateIn(coll, path, (target) => value)
}

export function shiftIn(coll, path, value) {
  return updateIn(coll, path, (target) => target.slice(1))
}

export function sliceIn(coll, path, start = undefined, end = undefined) {
  return updateIn(coll, path, (target) => target.slice(start, end))
}

export function pushIn(coll, path, value) {
  return updateIn(coll, path, (target) => [...target, value])
}

export function unshiftIn(coll, path, value) {
  return updateIn(coll, path, (target) => [value, ...target])
}

