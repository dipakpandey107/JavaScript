const useremail = "d@gmail.com"

if(useremail){
    console.log("got user email");
}else{
    console.log("don't have user email");
}


// ruless  of truty and false value

//false value

 //------- false , 0 ,-0,Bigint ,0n,"",null,"undefined","NaN",Infinity,
 
 //-----truty value

 // [] , "0","false"," " , {} , function(){}


 const emptyobj = {}

 if(Object.keys(emptyobj).length === 0){
    console.log("Empty object");
 }
