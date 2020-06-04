const Property = require("./Property");

class Apartment extends Property {
  constructor(address, balcony, parking) {
    super(address);
    this.balcony = balcony;
    this.parking = parking;
  }
}

module.exports = Apartment;
