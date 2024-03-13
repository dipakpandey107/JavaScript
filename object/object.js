
// //object custructor

// let user = new Object();

// //object literal

// let users = {};


// let student = {
//     name : "dipak",
//     age : "30"
// };

// console.log(student.name); // dipak

// //console.log(name);  //undefined 


// let person = {
//     name :"abcd",
//     age :"29",
//     id:"1",
//     address:"mumbai",
//     "city":"delhi"
// }
// console.log("Name: "+person.name+"\nAge: "+person.age);
// //console.log(city);
// console.log(student["city"]);


// // singleton
// // Object.create

// // object literals

// const mySym = Symbol("key1")


// const JsUser = {
//     name: "dk",
//     "full name": "Hry",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "Jaipur",
//     email: "dipak@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// // console.log(JsUser.email)
// // console.log(JsUser["email"])
// // console.log(JsUser["full name"])
// // console.log(JsUser[mySym])

// JsUser.email = "dipak@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.email = "dipak@microsoft.com"
// // console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


// // const tinderUser = new Object()
// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "dipak",
//             lastname: "pandey"
//         }
//     }
// }

// // console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// // const obj3 = { obj1, obj2 }
// // const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// // console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// users[1].email
// // console.log(tinderUser);

// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// // console.log(Object.entries(tinderUser));

// // console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "dkipl"
// }

// // course.courseInstructor

// const {courseInstructor: instructor} = course

// // console.log(courseInstructor);
// console.log(instructor);

// // {
// //     "name": "deepk",
// //     "coursename": "js",
// //     "price": "free"
// // }

// [
//     {},
//     {},
//     {}
// ]


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  let sum =0;
  for(const key in salaries) {
    sum+=salaries[key];
  };
  console.log(`Total salary is ${sum}`);



  let income ={
    dipak :130, 
    aman:120,
    suresh:340

  }

  let sum1=0;
  for(let key in income){
    sum1+=income[key];
  }
  console.log(sum1);