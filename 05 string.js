const name = "ram"
const repoCount =  50

// console.log(name + repoCount + " example");

// #######  or  ######

console.log(`hello his name is ${name} and his repocount is ${repoCount} for example`);

const gameName = new String('raman-kumar')
console.log(gameName[2]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('a'))

// slicing, substring
const newString = gameName.substring(0,8)
console.log(newString);

const newString1 = gameName.slice(-8,8)
console.log(newString1);

// trim, replace

const newString2 = "     shyam     "
console.log(newString2)
console.log(newString2.trim());

console.log(newString1.replace('-','_'));

// include (asking that it is available or not)

console.log(newString2.includes('y'));

// split

console.log(newString1.split("-"));












