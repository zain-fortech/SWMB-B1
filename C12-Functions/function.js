const classAMarks = [70, 90, 89, 67, 56, 76, 98];
const classBMarks = [80, 90, 89, 90, 57, 46, 58];

function calcAvg(marks) {
  let sum = 0;

  for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];

    sum = sum + mark;
  }

  const avg = sum / marks.length;

  return avg;
}

const classAAvg = calcAvg(classAMarks);

const classBAvg = calcAvg(classBMarks);

const goat = {
  color: "Yellow",
  age: 4,

  milk: function () {
    console.log("4 KG Milk");
  },

  milk() {
    console.log("4 KG Milk");
  },
};

const sum = (num1, num2) => num1 + num2;

const multiply = (multiplicant, multiplier = 1) => {
  return multiplicant * multiplier;
};

// const total = sum(4, 9);

// console.log(multiply(9));

// Callback Function
const greet = (name, gender, cb) => {
  let pronoun = "He";

  if (gender == "F") {
    pronoun = "She";
  }

  const message = pronoun + " is " + name;

  cb(message);
};

greet("Erika", "F", (result) => {
  const now = new Date();

  const message = now.toJSON() + ": " + result;

  console.log(message);
});
