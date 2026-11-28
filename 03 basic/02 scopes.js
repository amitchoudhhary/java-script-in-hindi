let a = 1000
// bhar ka scope hota h global scope
// {} is k ander ka scope hota h block scope 
if (true){
  let a = 10
  const b = 20
  var c = 30 // y var use nhi karenge q ki y global scope h ise apan block scope k bhar bhi access kr sakte h
  console.log("inner: " + a);
   
}


console.log(a);
// console.log(b);
// console.log(c);

