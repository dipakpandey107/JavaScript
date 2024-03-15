// for loop
//let array = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(`The value of the current element is ${element}`);  
    
    
}
//console.log(element);

//table 

for(let i =0;i<10;i++){
    for(let j =0;j<=10;j++){
       // console.log(`table ${j} and inner loop ${i}`);
        console.log(i + '*' + j + '=' + i*j);
    }
}


let myarray = ['flash','batmman']

for (let index = myarray; index < myarray.length; index++){
    const element = myarray[index];
    console.log(`This is ${element}`);
}

