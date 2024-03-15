const user ={
    username : "dipak",
    price:100,
    welcomemessage:function(){
        console.log(`${this.username},welcome to world`);
        console.log(this);
    }

}

user.welcomemessage();
user.username="sam";
user.welcomemessage();
//console.log(this);

function cofee(){
    console.log(this)
}
cofee();


// Regular function
function regularFunction(x, y) {
    return x + y;
  }
  
  // Arrow function
  const arrowFunction = (x, y) => (x + y);
  
  console.log(regularFunction(2, 3)); // Output: 5
  console.log(arrowFunction(2, 3));   // Output: 5
  