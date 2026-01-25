// Array / List
const top20CitiesOfPak = [
  "Lahore",
  "Gujranwala",
  "Faisalabad",
  "Gujrat",
  "Karachi",
  "Peshawar",
  9878,
  987987,
];

console.log(top20CitiesOfPak);

const indexOfLahore = top20CitiesOfPak.indexOf("Lahore");

const first3Cities = top20CitiesOfPak.slice(0, 3);

const first4Cities = top20CitiesOfPak.splice(0, 4);

top20CitiesOfPak.push("Sialkot");
top20CitiesOfPak.unshift("Hafizabad");

const isSialkotAmongTheList = top20CitiesOfPak.indexOf("Sialkot");

const filtered = top20CitiesOfPak.filter((city) => city !== "Karachi");

const kpkCities = ["Islamabad", "Mardan", "Malakand", "Balakot"];
const sindhCities = ["Karachi", "Haidarabad", "Larkana", "Jamshoro"];

const allCities = filtered.concat(kpkCities, sindhCities);

allCities.pop();

allCities.reverse();

console.log("3rd city: ", allCities[2]);

// Premitive vs Non-Premitive Data Types
