// singleton => object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
  name: "vishal",
  "fullName": "vishal Kumar",
  [mySym]: "myKey1",
  age: 18,
  location: "jaipur",
  email: "vishal@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullName"]);
// console.log(jsUser[mySym]);

jsUser.email = "vishalkumar@gmail.com"  // for change the value
// Object.freeze(jsUser)  // for freeze all the value of key that no one can change it
jsUser.email = "vishalkumar@chatgpt.com"
// console.log(jsUser);
 

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greeting); // ===>>>   this shows us undefined
console.log(jsUser.greeting()); // for output
console.log(jsUser.greetingtwo());


