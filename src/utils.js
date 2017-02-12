import _ from 'lodash'

export function set(coll, key, value) {
  let result = Object.assign({}, coll)
  result[key] = value
  return result
}

export function mapMatching(coll, match, fn) {
  return _.map(coll, obj => {
    if (_.isMatch(obj, match)) {
      return fn(obj)
    } else {
      return obj
    }
  })
}
