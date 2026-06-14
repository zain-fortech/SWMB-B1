const marksMap = new Map();

marksMap.set("hamza", 100);
marksMap.set("ahmed", 101);

marksMap.set({}, "sometning");

const alisMarks = marksMap.get("ali");
const hamzasMarks = marksMap.get("hamza");

const hasAminsMarks = marksMap.has("amin");

const hasObject = marksMap.get({});

console.log({ hasObject });

const equal = {} == {};

console.log({ equal });

// <------------------------------------------------------------->

const marksObject = {};

marksObject.hamza = 100;

marksObject["ali"] = 200;

const hasAminMarks_2 = "ali" in marksObject;

const aliMarks = marksObject["ali"];
// console.log(hasAminMarks_2);
