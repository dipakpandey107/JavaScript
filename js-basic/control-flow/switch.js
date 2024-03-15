// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = "march"

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case "march":
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
   case 7:
       console.log("july");
       fallthrough;


    default:
        break;
}