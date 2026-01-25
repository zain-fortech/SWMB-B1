// Premitive - String, Number, Boolean
// let permanentCity = "Gujranwala";

// let currentCity = permanentCity;

// permanentCity = "Lahore";

// console.log(currentCity, permanentCity);

// Non-Premitive - Arrays, Object
let permanentCities = ["Lahore", "Gujranwala"];

let currentCities = permanentCities;

permanentCities[0] = "Hafizabad";

console.log(permanentCities, currentCities);
