// const tinderUser = new Object() // ====>>>>   singleton object
const tinderUser = {}; // =====>>>>>   non singleton object

tinderUser.id = "1234js";
tinderUser.name = "Vishnu";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "someone@gmil.com",
  fullname: {
    userFullname: { 
      firstName: "vishnu", 
      lastName: "verma" 
    }
  }
};

// console.log(regularUser.fullname.userFullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
//    ******(or)******
// const obj3 = Object.assign(obj1, obj2)
//   ******(or)*******
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
  {
    id: 1,
    email: "aman@gmail.com"
  },
    {
    id: 1,
    email: "aman@gmail.com"
  },
    {
    id: 1,
    email: "aman@gmail.com"
  },
]

users[1].email
console.log(tinderUser);

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // for property user that is available or not

// object de-structure  ===>>> is m kafi jaghe p ({}) aishe bhi milega
const course = {
  coursename: "js in hindi",
  Price: "999",
  courseInstructor: "amit"
}

// course.couseInstructor
const {courseInstructor} = course 
// (or)  for to change name meanse if we want to call object by another name then we have to write ===>>> const {coureInstructor: instructor} = course   ===>>> then we have to write for print console.log(instructor)
const {Price} = course 
console.log(Price);
console.log(courseInstructor);

// json (javascript object notation) format   is m key or value dono string m likhi hoti h
// {
//   "name": "amit",
//   "coursename": "js in hindi",
//   "price": "free"
// }




