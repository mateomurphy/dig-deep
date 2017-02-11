import * as d from './index'
import deepFreeze from 'deep-freeze'

describe('mergeIn', () => {
  it('replaces merges into existing values', () => {
    let o = deepFreeze({a: 1, b: 2, c: { d: 3, e: 4 }})
    let result = d.mergeIn(o, ["c"], { e: 5 })

    expect(result).toEqual({a: 1, b: 2, c: { d: 3, e: 5 }})
  })
})

describe('pushIn', () => {
  it('adds to the end of the array', () => {
    let o = deepFreeze({a: 1, b: 2, c: [3, 4]})
    let result = d.pushIn(o, ["c"], 5)

    expect(result).toEqual({a: 1, b: 2, c: [3, 4, 5]})
  })
})

describe('setIn', () => {
  it('replaces an existing value', () => {
    let o = deepFreeze({a: 1, b: 2, c: 3})
    let result = d.setIn(o, ["b"], 4)

    expect(result).toEqual({a: 1, b: 4, c: 3})
  })
})

describe('unshiftIn', () => {
  it('adds to the beginning of the array', () => {
    let o = deepFreeze({a: 1, b: 2, c: [3, 4]})
    let result = d.unshiftIn(o, ["c"], 5)

    expect(result).toEqual({a: 1, b: 2, c: [5, 3, 4]})
  })
})

describe('updateIn', () => {
  it('replaces an existing value', () => {
    let o = deepFreeze({a: 1, b: 2, c: 3})
    let result = d.updateIn(o, ["b"], t => 4)

    expect(result).toEqual({a: 1, b: 4, c: 3})
  })
})

