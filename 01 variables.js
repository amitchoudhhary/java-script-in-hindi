const accountId = 13456  
let accountEmail = "amit@12234gmail.com"
var accountPassword = "1234"
accountCity = "jaipur"
let accountState;

// const cannot be change
// accountId = 2  (not allowed)
// console.log(accountId);
/* prefer not to use var because of issue in block scope and fuctional scope*/

accountEmail = "ram@gmail.com"
accountPassword = "22222"
accountCity = "delhi"
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);
//      (or)
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])

