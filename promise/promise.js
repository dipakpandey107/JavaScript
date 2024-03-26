
//create

const promiseOne = new Promise(function(resolve , reject){
    // do and async task

    // DB Call , network , cryptography


    setTimeout(function(){
        console.log("completed");
        resolve('Hello World');
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log("async task 2");
        resolve()
        
    }, 1000);
}).then(function(){
    console.log("Task 2 done resolved");
})



let promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let success = true;
        if(success){
           resolve("fecth succesfully");

        }else{
            reject("error");
        }
    }, 2000);
});

promise.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})


let promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"dipak", email:"noobgaming2907@gmail.com"})
    },1000)
})

promise3.then(function(user){
  console.log(user);
})


let promisefour = new Promise(function(resolve, reject) {
    setTimeout(function() {
       let error = false; // Change to false to resolve the promise
       if (!error) {
          resolve({username: "dipak", password: "dipak1234"});
       } else {
          reject("error wrong something");
       }
    }, 1000);
 });
 
 promisefour.then((user) => {
    console.log(user);
    return user.username;
 }).then((username) => {
    console.log(username); // Output: dipak
 }).catch((error) => {
    console.error(error); // Output: error wrong something
 });
 