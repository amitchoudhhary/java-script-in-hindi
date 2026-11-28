let a = 1000
// bhar ka scope hota h global scope
// {} is k ander ka scope hota h block scope 
if (true){
  let a = 10
  const b = 20
  var c = 30 // y var use nhi karenge q ki y global scope h ise apan block scope k bhar bhi access kr sakte h
  // console.log("inner: " + a);
   
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
  const username = "ramawtar"

  function two (){
    const webserver = "youtube"
    console.log(username);
  }
  // console.log(webserver);

  two()
  // console.log("inner: "+ username)
}

// one() 

if (true) {
  const username = "ram "
  if (username === "ram "){
   const webserver = "youtube"
  //  console.log(username + webserver);
  }
  // console.log(webserver);
  
}

// console.log(username);


// +++++++++++++++++  interesting ++++++++++++++++

console.log(addone(5))
function addone(num){
  return num + 1
}

// addTwo(6) // y error dega q ki function ko apan n other m store kr diya h 
const addTwo = function(num){
  return num + 2
}
addTwo(6)
