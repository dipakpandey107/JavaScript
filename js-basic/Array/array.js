// //array


// const myarr=['apple','banana','cherry'];


//  let arr = new  Array(5,4,5,6);
// //       //create an array with 
// // arr.push(8);
// // arr.push(0);

// // console.log(arr);

// // slice and spice

// console.log("a",arr);

// const m1 = arr.slice(2,3);
// console.log('m1',m1);
// console.log("b",arr);




//slice and splice

// const array = [8,1, 2, 3, 4, 5];
// const slicedArray = array.slice(0, 3);
// console.log(slicedArray); // Output: [2, 3, 4]
// console.log(array); // Output: [1, 2, 3, 4, 5]


// const marray = [1, 2, 3, 4, 5];
// const removedItems = marray.splice(1, 3, 6, 7);
// console.log(marray); // Output: [1, 6, 7, 5]
// console.log(removedItems); // Output: [2, 3, 4]


 const marvel_heros=["thor","ironman"];

 const dc = ["flash","batman"];

// marvel_heros.push(dc);

// console.log(marvel_heros);


// const allheros = marvel_heros.concat(dc);

// console.log(allheros);


//spread


const all_heros =[...marvel_heros,...dc];
console.log(all_heros);

