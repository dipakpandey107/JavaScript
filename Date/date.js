

// Dates


let  date = new Date();

console.log(date.toString());

console.log(date.toDateString());// Data atual no formato: dia, dia do semana

console.log(date.toLocaleString());
console.log(typeof date);


let mycretedate = new Date(23,0,23);

console.log(mycretedate.toDateString());


let mytimestamp = Date.now();
console.log("Timestamp: "+mytimestamp);