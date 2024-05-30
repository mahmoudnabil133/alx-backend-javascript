export default class SkyHighBuilding  {
    constructor(sqft, floors) {
      super(sqft);
      this.floors = floors;
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
  
    get floors() {
      return this._floors;
    }
  
    set floors(floors) {
      if (typeof floors !== 'number') {
        throw new Error('floors must be a number');
      }
      this._floors = floors;
    }
  
    evacuationWarningMessage(){
      return `Evacuate slowly the ${this._floors} floors`
    }
  }
  