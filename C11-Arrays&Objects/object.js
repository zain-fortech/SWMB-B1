const personA = {
  color: "Brown",
  height: "5.6",
  age: 70,
  weight: 75,
  gender: "M",

  greet: () => {
    console.log("Assalamu alaikum!");
  },
  eat: () => {
    console.log("I'm eating snacks.");
  },
};

const age = personA["age"];

console.log(age);
