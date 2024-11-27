let firstname: string = "Roger"; // infer to string

// fname = 33; not valid

let value: number = 10; // infer to number

let isValid: boolean = true; // false

enum AccountType {
    SAVING = 1,
    CURRENT = 2,
    FIXED = 3
}

// uninitialized members implicitly gets assigned with numerical literals
enum BillingSchedule {
    FREE,
    MONTHLY,
    YEARLY
}

let emailEx = RegExp(/^[a-zA-Z0-9._]+@[a-zA-Z]+[a-zA-Z]{2,4}$/);

let email: string = "james@gmail.com";

console.log(emailEx.test(email)); // true or false

function add(a: number, b: number): number {
    return a + b;
}

add(4, 5);
//add("Hello", "world"); //Argument of type 'string' is not assignable to parameter of type 'number'.

let numbers: number[] = [4, 1, 4];

// "noUncheckedIndexedAccess": true, 
// add(6, numbers[10]);  // fails with "noUncheckedIndexedAccess": true,

const temp: number[] = [27, 28, 29, 42, 30];

// feature from Baseline 2022
//    "lib": ["ES2023", "DOM"],
let high = temp.findLast(x => x > 40);
console.log(high);

//  "allowUnreachableCode": false,   
function doTask() {
    return "Hello World";
    console.log("Task executed"); // unreachable code
}