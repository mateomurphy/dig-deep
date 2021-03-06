import * as d from './index'
import deepFreeze from 'deep-freeze'

describe('get', () => {
  it('retrievs an existing value', () => {
    let o = deepFreeze({a: 1, b: 2, c: 3})
    let result = d.get(o, ["b"])

    expect(result).toEqual(2)
  })

  describe('with object path', () => {
    it('retrieves an existing value', () => {
      let coll = { foo: [{ bar: 1, baz: 2 }, { bar: 3, baz: 4 }]}
      let path = ['foo', { bar: 1 }, 'baz']

      let result = d.get(coll, path)

      expect(result).toEqual(2)
    })
  })
})

describe('first', () => {
  it('adds to the beginning of the array', () => {
    let o = deepFreeze({a: 1, b: 2, c: [3, 4]})
    let result = d.first(o, ["c"])

    expect(result).toEqual(3)
  })
})

describe('last', () => {
  it('adds to the beginning of the array', () => {
    let o = deepFreeze({a: 1, b: 2, c: [3, 4]})
    let result = d.last(o, ["c"])

    expect(result).toEqual(4)
  })
})

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

  describe('with object path', () => {
    it('it replaces an existing value', () => {
      let coll = { foo: [{ bar: 1, baz: 2 }, { bar: 3, baz: 4 }]}
      let path = ['foo', { bar: 1 }, 'baz']

      let result = d.set(coll, path, 5)

      expect(result).toEqual({ foo: [{ bar: 1, baz: 5 }, { bar: 3, baz: 4 }]})
    })
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

