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

