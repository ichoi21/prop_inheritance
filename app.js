const House = require("./util/House");
const Apartment = require("./util/Apt");

const myHouse = new House("168 Aria Pl", true, true);
const myApt = new Apartment("12888 Briham Blvd", true, "extra");

myHouse.addToPets(["Addie", "Bleu", "Charlie"]);
myHouse.addToPets(["Fluffy"]);

myHouse.addToTenants(["LC", "EC", "IC"]);

myApt.addToTenants(["LC", "IC"]);

// console.log(myHouse);
console.log(myApt);
