import _ from 'lodash'

export function set(coll, key, value) {
  return {
    ...coll,
    [key]: value
  }
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
