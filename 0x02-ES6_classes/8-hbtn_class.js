export default class HolbertonClass {
  constructor(size, location) {
    // Type validation and assignment for size and location
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  // Override the default behavior when casting to Number
  valueOf() {
    return this._size;
  }

  // Override the default behavior when casting to String
  toString() {
    return this._location;
  }
}

