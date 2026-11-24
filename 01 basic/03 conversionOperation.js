let score = "33fg"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // for convert string to number
console.log(valueInNumber);


/* "33" => 33
    "33abc" => NaN (not a number) 
    true => 1; false => 0 */

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0=> false
// " " => false
//  "amit" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ************ Operation  ************ //

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%2);

let str1 = "hello"
let str2 = " ram"
console.log(str1 + str2);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(true);
console.log(+true);
// console.log(true+); shown error
console.log(+"");

let gameCounter = 100
console.log(gameCounter);
gameCounter++;  // postfix
++gameCounter;  // prefix
console.log(gameCounter);



















