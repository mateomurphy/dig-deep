import * as d from './index'
import deepFreeze from 'deep-freeze'

describe('merge', () => {
  it('replaces merges into existing values', () => {
    let o = deepFreeze({a: 1, b: 2, c: { d: 3, e: 4 }})
    let result = d.merge(o, ["c"], { e: 5 })

    expect(result).toEqual({a: 1, b: 2, c: { d: 3, e: 5 }})
  })
})

describe('pop', () => {
  it('adds to the beginning of the array', () => {
    let o = deepFreeze({a: 1, b: 2, c: [3, 4]})
    let result = d.pop(o, ["c"])

    expect(result).toEqual({a: 1, b: 2, c: [3]})
  })
})

describe('push', () => {
  it('adds to the end of the array', () => {
    let o = deepFreeze({a: 1, b: 2, c: [3, 4]})
    let result = d.push(o, ["c"], 5)

    expect(result).toEqual({a: 1, b: 2, c: [3, 4, 5]})
  })
})

describe('set', () => {
  it('replaces an existing value', () => {
    let o = deepFreeze({a: 1, b: 2, c: 3})
    let result = d.set(o, ["b"], 4)

    expect(result).toEqual({a: 1, b: 4, c: 3})
  })
})

describe('shift', () => {
  it('adds to the end of the array', () => {
    let o = deepFreeze({a: 1, b: 2, c: [3, 4]})
    let result = d.shift(o, ["c"])

    expect(result).toEqual({a: 1, b: 2, c: [4]})
  })
})

describe('slice', () => {
  it('supports no arguments', () => {
    let o = deepFreeze({a: 1, b: 2, c: [3, 4]})
    let result = d.slice(o, ["c"])

    expect(result).toEqual({a: 1, b: 2, c: [3, 4]})
  })

  it('supports one argument', () => {
    let o = deepFreeze({a: 1, b: 2, c: [3, 4]})
    let result = d.slice(o, ["c"], 1)

    expect(result).toEqual({a: 1, b: 2, c: [4]})
  })

  it('supports two arguments', () => {
    let o = deepFreeze({a: 1, b: 2, c: [3, 4]})
    let result = d.slice(o, ["c"], 0, 1)

    expect(result).toEqual({a: 1, b: 2, c: [3]})
  })
})

describe('unshift', () => {
  it('adds to the beginning of the array', () => {
    let o = deepFreeze({a: 1, b: 2, c: [3, 4]})
    let result = d.unshift(o, ["c"], 5)

    expect(result).toEqual({a: 1, b: 2, c: [5, 3, 4]})
  })
})

describe('update', () => {
  it('replaces an existing value', () => {
    let o = deepFreeze({a: 1, b: 2, c: 3})
    let result = d.update(o, ["b"], t => 4)

    expect(result).toEqual({a: 1, b: 4, c: 3})
  })
})

