const Property = require("./Property");

class House extends Property {
  constructor(address, fYard, bYard) {
    super(address);
    this.fYard = fYard;
    this.bYard = bYard;
  }
}

module.exports = House;

//extends grabs all from Property.js like a parent class
// and into this child class
//super is a function to grab the constructor content from parent class.
