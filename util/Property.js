class Property {
  constructor(address) {
    this.address = address;
    this.tenants = [];
    this.pets = [];
  }

  addToPets(arr) {
    this.pets = [...this.pets, ...arr];
  }

  addToTenants(arr) {
    this.tenants = [...this.tenants, ...arr];
  }
}
// ... spreads out an array

module.exports = Property;

// const myPlace = new Property("888 Broadway");

// console.log(myPlace);
