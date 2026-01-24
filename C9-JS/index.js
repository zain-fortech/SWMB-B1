let userName = "aslam ali";

userName = userName.toUpperCase();

userName = userName.toLowerCase();

// userName = userName.trimEnd();
// userName = userName.trimStart();

const trimmedUserName = userName.trim();

const isThisAslamsName = trimmedUserName.startsWith("aslam");

const isThisAAlisLastName = trimmedUserName.endsWith("ali");

const whereIsL = trimmedUserName.indexOf("m");

const awhatIsAtIndex6 = trimmedUserName.charAt(6);

const firstName = userName.slice(0, 5);
const lastName = userName.slice(6, 9);

const finalName = firstName.concat(" ", lastName);

const splittedName = userName.split(" ");

const para =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const slicedPara = para.slice(0, 200);

console.log(slicedPara.length, para.length);

// Objects
// Arrays
