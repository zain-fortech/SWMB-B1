// var $amount = 210;

// // Type coersoin
// const isEqual = "5" == 5;

// console.log({ isEqual });

// // Premitive data types
// /**
//  * String
//  * Number
//  * Boolean
//  * BigInt
//  * Undefined
//  * null
//  */

// let marks = 26;

// marks++;
// marks = marks + 1;

// console.log({ marks });

// // Arethmetic precedence
// const result = ((3 + 5) * 6) / 8;

// console.log({ result });

// // Modolous operator
// const remainder = 21 % 6;

// console.log({ remainder });

// if (isEqual) {
//   console.log("Equal");
// } else if ("5" === 5) {
//   console.log("NotEqual");
// } else if (0 == "0") {
//   console.log("NotEqual");
// } else {
// }

// // Map -> Object
// const grades = {
//   musharif: 80,
//   Ab_rehman: 91,
//   Arslam: 90,
// };

// grades.hashim = 78;

// const musharifMarks = grades["musharif"];
// const abMarks = grades.Ab_rehman;
// const hashimMarks = grades.hashim;

// const muzammilMarks = "muzammil" in grades;

// console.log({ musharifMarks, abMarks, hashimMarks });

// const gradesMap = new Map();

// gradesMap.set("musharif", 80);

// const musharfifMarksFromMap = gradesMap.get("musharif");

// const muzammilMarksFrmoMap = gradesMap.has("muzammil");

// console.log({ musharfifMarksFromMap, muzammilMarksFrmoMap });

// // Set -> Array
// const gradesArr = [34, 56, 76, 34, 45, 34];

// const is45InArr = gradesArr.indexOf(5);

// console.log({ is45InArr });

// const gradesSet = new Set(gradesArr);

// const is45InSet = gradesSet.has(45);

// console.log({
//   gradesSet,
//   gradesArr,
//   is45InSet,
// });

// Functions (arguments, parameters)
const sum = (a, b) => a + b; // params

// const sum = (a, b) => {
//   return a + b;
// }; // params

// function sum(a, b) {
//   return a + b;
// }

sum(2, 3); // args
sum(5, 9);

function greet() {
  const phrase = "Helloooo!";
  console.log(phrase);
}

const result = greet();

console.log({ result });
