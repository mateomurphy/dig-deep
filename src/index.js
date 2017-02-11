import _ from 'lodash'

export function update(coll, path, fn) {
  if (path.length === 0) {
    return fn(coll)
  }

  let key = path.shift()

  // map with key when in object mode
  if (typeof key === 'object') {
    return _.map(coll, obj => {
      if (_.isMatch(obj, key)) {
        return update(obj, path, fn)
      } else {
        return obj
      }
    })
  } else {
    return {
      ...coll,
      [key]: update(coll[key], path, fn)
    }
  }
}

export function merge(coll, path, value) {
  return update(coll, path, (target) => Object.assign({}, target, value))
}

export function pop(coll, path) {
  return update(coll, path, (target) => target.slice(0, -1))
}

export function set(coll, path, value) {
  return update(coll, path, (target) => value)
}

export function shift(coll, path, value) {
  return update(coll, path, (target) => target.slice(1))
}

export function slice(coll, path, start = undefined, end = undefined) {
  return update(coll, path, (target) => target.slice(start, end))
}

export function push(coll, path, value) {
  return update(coll, path, (target) => [...target, value])
}

export function unshift(coll, path, value) {
  return update(coll, path, (target) => [value, ...target])
}

