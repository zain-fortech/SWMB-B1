// const classAMarks = [80, 90, 89, 90, 57, 46, 58];

// function calcAvg(marks) {
//   let sum = 0;

//   // For loop
//   for (let i = marks.length - 1; i >= 0; i--) {
//     const mark = marks[i];

//     sum = sum + mark;
//   }

//   const avg = sum / marks.length;

//   return avg;
// }

// calcAvg(classAMarks);

// let i = 0;

// while (i < 5) {
//   const now = new Date();

//   const millis = now.getMilliseconds();

//   console.log("Hello", millis);

//   i++;

//   if (i == 3) break;
// }

// const cities = ["GRW", "HFD", "SKT", "GJR", "LHR", "NRW", "MBD"];

// for (let i = 0; i < cities.length; i++) {
//   const city = cities[i];

//   if (city == "LHR") continue;

//   console.log(city);
// }

// let i = 5;

// do {
//   const now = new Date();

//   const millis = now.getMilliseconds();

//   console.log("Hello", millis);

//   i++;
// } while (i < 5);

// For of loop - Works on arrays best

const cities = ["GRW", "HFD", "SKT", "GJR", "LHR", "NRW", "MBD"];

// for (let i = 0; i < cities.length; i++) {
//   const city = cities[i];

//   console.log(city);
// }

// for (const city of cities) {
//   console.log(city);
// }

// For in Loop - Works on objects best
const name = "Zain";

const person = {
  name,
  age: 27,
  height: 5.6,
  gender: "Male",
};

for (const key in person) {
  const value = person[key];

  console.log({
    key,
    value,
  });
}
