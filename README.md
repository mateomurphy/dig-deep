# dig-deep

A collection of utilities for handling nested immutable structures.


## Usage

All methods take a collection and a path as the first two arguments.

The collection can be an arbitrary mix of objects and array.

The path is an array of strings and objects: the strings will match object keys, and the objects will match object values in an array. Example:

    let coll = { foo: [{ bar: 1, baz: 2 }, { bar: 3, baz: 4 }]}
    let path = ['foo', { bar: 1 }, 'baz']

    let result = d.set(coll, path, 5)

    expect(result).toEqual({ foo: [{ bar: 1, baz: 5 }, { bar: 3, baz: 4 }]})


## API

* update
* merge
* pop
* set
* shift
* slice
* push
* unshift

### merge(coll, path, value)

Merges the value into the collection at the path.

### pop(coll, path)

Removes the last value of the array at a given path. Note that what is returned is the collection without the value, not the removed value.

### set(coll, path, value)

Sets the value at the given path of the collection.

### shift(coll, path)

Removes the first value of the array at a given path. Note that what is returned is the collection without the value, not the removed value.

### slice(coll, path, start = undefined, end = undefined)

Returns a slice of an array at a given path.

### push(coll, path, value)

Adds the value to the end of the array at a given path.

### unshift(coll, path, value)

Adds the value to the beginning of the array at a given path.

### update(coll, path, fn)

Update a structure by applying the given function to a path in the collection. The value at the path is passed to the function, and will be replaced by the return value. Note that immutability is not enforced here, so mutating the value and returning the value will break the immutability of the collection.

