// Primitive data type
/*  7 types
   1. String
   2. number
   3. boolean
   4. null
   5. undefined
   6. symbol
   7. bigint
*/

const score = 100
const scoreValue = 100.3
console.log(`type of score is ${typeof score}`);
console.log(`type of scoreValve is ${typeof scoreValue}`);


const isLoggedIn = false
const outSideTemp = null
let userEmail;
console.log(` typer of isloggedin is ${typeof isLoggedIn}`);
console.log(`type of outsidetemp is ${typeof outSideTemp}`);
console.log(`type of useremail is ${typeof userEmail}`);


const id = Symbol('123')
const anotherid = Symbol('123')
console.log(`type of id is ${typeof id}`);
console.log(` type of anotherid is ${typeof anotherid}`);


console.log(id === anotherid);

const bigNumber = 9127349240n
console.log(`type of bignumber is ${typeof bigNumber}`);



// Reference (non primitive)

// Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"] // array

let myObj = {  //object
   name : "hansraj",
   age : 21,
}

// function(){}  normal function 
const myFunction = function(){
   console.log("hello");
}

console.log(` type of myfunction is ${typeof myFunction}`);


// ******* Memory *******
// 1. Stack => provide data's copy
//  => use in primitive data type

//  2. heap => provide data's location
//   => use in non-primitive data type

let myInstausername = "amit2"

let anotherName = myInstausername
anotherName = "onlyamit"

console.log(anotherName);
console.log(myInstausername);

let userOne = // stack
{
   // heap
   email : "amit@gmail.com",
   upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "user@mail.com"

console.log(userOne.email);
console.log(userTwo.email);

