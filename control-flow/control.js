

// control flow


const isusserLoggedIn = true;

const temperature = 41;

if(temperature<50){
    console.log("less than  50");
}else if (temperature>=50 && temperature<=70) {
    console.log('between 50 and 70');
}
console.log("dipak");

if(isusserLoggedIn){

}


const balance =  1000

if(balance>500) console.log("yes");
// else statement is optional in JavaScript, but it's a good practice to use it for clarity
else{
    console.log("no")
}



// < ,> <= ,>= ==(check equal ) != (not equal), ===(check type also ), !== 



//nested loop


if(balance<500){
    console.log("less than");
}else if(balance<750){
    console.log("less than 750");
}else if(balance<950){
    console.log("greater than 750 less than 950");
}else{
    console.log("grather than 950 ");
};


const userloogedin = true;

const debitcard = true;

const loggedingoogle = false;

if(userloogedin && debitcard ){
    console.log("allow to buy shopping");
}else{
    console.log("no my boy you can't buy");
}

if(loggedingoogle || userloogedin){
    console.log("welcome");
}else{
    console.log("no boy");
}

