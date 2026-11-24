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
console.log(typeof score);
console.log(typeof scoreValue);


const isLoggedIn = false
const outSideTemp = null
let userEmail;
console.log(typeof isLoggedIn);
console.log(typeof outSideTemp);
console.log(typeof userEmail);


const id = Symbol('123')
const anotherid = Symbol('123')
console.log(typeof id);
console.log(typeof anotherid);


console.log(id === anotherid);

const bigNumber = 9127349240n
console.log(typeof bigNumber);



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

console.log(typeof myFunction);



