

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

console.log(Math.floor(mytimestamp/1000));


let newdate = new Date()

console.log(newdate.getTime());
console.log(newdate.getFullYear())
console.log(newdate.getMonth()+1);
console.log(newdate.getDay());