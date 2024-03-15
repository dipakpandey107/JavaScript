

//invoke function
(function app(){
    console.log("1");
    (function addNumbers(a,b){
        return a+b;  
     })(2,3);
}());



