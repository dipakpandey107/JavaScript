const arr = [1,2,3,4,5];

for (const i of arr) {
   // console.log(i);
}



//object 


const myobj = {
    js:"javascript",
    cpp:"c++",
    py:"python"
}

for (const key in myobj) {
   // console.log(key);
   // console.log(`${key}: ${myobj[key]}`);
}


const programing =["js",'cpp',"java"]

for(const key in programing){
    console.log(programing[key]);
}


//map is not interatable


const map = new Map()

map.set(1,"one");
map.set(2,"two");
map.set("a","A");
map.set(true, "Yes");


for (const key in map) {
    console.log(key);  //no output
}


