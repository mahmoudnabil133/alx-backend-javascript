export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      const protos = Object.getOwnPropertyNames(this.constructor.prototype);
      if (!protos.find((el) => el === 'evacuationWarningMessage')) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft;
  }
}
