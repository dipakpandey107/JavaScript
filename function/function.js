
function sayMyName(){
    console.log("D");
    console.log("I");
    console.log("P");
    console.log("A");
    console.log("K");

}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
       // console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("DIPAK"))
// console.log(loginUserMessage("DIPAK"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "DIPAK",
    prices: 199
}

function handleObject(anyobject){
   // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200, 400, 500, 1000]));


const person = {
    name :"paul",
    age :"18"
}

function person1(personobj){
    console.log(`name and age is return ${personobj.name},${personobj.age}`)
    return;

};
person1(person);


const student = {
    name : "arkan",
    id: "1",
    course :"msc.it"
}


function studentDetails(studentDetails){
    console.log(`The student name is ${studentDetails.name} Id is ${studentDetails.id} course is ${studentDetails.course}`);
}

studentDetails(student);