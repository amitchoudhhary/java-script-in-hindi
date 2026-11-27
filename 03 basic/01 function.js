// in this code function is keyword and sayMyName is function name or y () function syntex or {} is m function ki defention h 
function sayMyName(){
  console.log("A");
  console.log("M");
  console.log("I");
  console.log("T");
}

//  sayMyName yaha ho gaya reference and () y ho gaya execute
// sayMyName()

// function addTwoNumbers (number1, number2) {
//   // jb function ki defenition banate h or us m jo bhi input lete h unhe  bolte h perameter
//   console.log(number1 + number2);
// }
//  ===>>>  (or)   y niche wala code h jo result m value pass ho rhi  h undefined m us k liye
function addTwoNumbers (number1, number2) {
  let sum = number1 + number2    // or in ko apan direct bhi return kr sakte h jaie (return = number1 + number2)
  return sum // is ka mtlb jb mera function execute ho jayga to is result ko return kr do
  // or return k baad kuch bhi likhte ho to vo kam nhi karenga fir 
}

// jab funtion ko call krate h tb us m jo value pass karte h unhe bolte h arguments
const result = addTwoNumbers(3,4) // ==>> output is 7
console.log("result:", result) // ===>>> undefined

function loginUserMessage(username){
  return `${username} just logged in`
}

console.log(loginUserMessage("hemraj"))  // agar yaha value pass nhi hogi to yaha print k time undefined lika hua aayga


// if else condition agar vaha p usernaem nhi diya hua h to ham direct use bolenge ki yaha username do 
function loginUserMessage(username /* or yaha apan default value bhe d sake h jaise username = "ram" y dene k baad niche kuch nhi dena hoga jb call karenge */)
{
 if(!username /* (or) username ===  undefined*/){ 
  console.log("please enter a username");
  return
 }
  return `${username} just logged in`
}
