
//local and global variable 
let a= 300;

if(true){
    let a = 10;
const b = 20;
var c=30;
}
//console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username = "dipak";

    function  two() {
      const msg = "hello world";
      console.log(username);
    }
    two();
}
one();  


if(true){
    const username = "dipak"

    if(username==="dipak"){
        const website ="whatsapp"
        console.log(`${username}'s Website is ${website}`);
    }
   // console.log(website);
}
//console.log(username);