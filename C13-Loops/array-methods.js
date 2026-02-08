const cities = ["GRW", "HFD", "SKT", "GJR", "LHR", "NRW", "MBD"];

const isSktInTheList = cities.find((city) => {
  return city == "SKT";
});

const filteredList = cities.filter((city) => {
  return city !== "MBD";
});

// cities.forEach((city) => {
//   console.log(city);
// });

const mappedCities = cities.map((city, index) => {
  return index + 1 + ": " + city;
});

for (let i = 0; i < cities.length; i++) {
  const city = cities[i];

  cities[i] = i + 1 + ": " + city;
}

const nums = [6, 8, 9];

const sum = nums.reduce((acc, num) => {
  return acc + num;
}, 0);

console.log({ sum });
