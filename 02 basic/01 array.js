// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myHeors[0])

// Array methods

// myArr.push(6) // add values
// myArr.push(8) // add values
// myArr.pop()//last value remove kr deta h arrayy m s

// myArr.unshift(9) // add number at the starting point
// myArr.shift() // remove from the first
// myArr.shift() // remove from the first

// console.log(myArr.includes(9)); // to know that the element is prest or not
// console.log(myArr.indexOf(5)); // to know the index of a element

// const newArr = myArr.join()//adds all the element into a string

// console.log(myArr);
// console.log(typeof newArr);

//Slice, Splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3) // return a copy of section array
console.log(myn1);
console.log("b", myArr);

const myn2 = myArr.splice(1, 3) // return array of remove data of range 
console.log(myn2);




