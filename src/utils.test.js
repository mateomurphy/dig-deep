import * as u from './utils'
import deepFreeze from 'deep-freeze'

describe('mapMatching', () => {
  it('maps matching values', () => {
    let c = deepFreeze([{ a: 1, b: 2 }, { a: 3, b: 4 }])
    let result = u.mapMatching(c, { a: 1 }, (o) => ({ ...o, b: 5 }))

    expect(result).toEqual([{ a: 1, b: 5 }, { a: 3, b: 4 }])
  })
})
