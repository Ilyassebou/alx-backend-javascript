export default class Building {
  constructor(sqft) {
    // Type validation for sqft
    if (typeof sqft !== 'number') {
      throw new TypeError('Square footage must be a number');
    }
    this._sqft = sqft;

    // Ensure the class is abstract by checking the method in constructor
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Sqft getter
  get sqft() {
    return this._sqft;
  }
}
