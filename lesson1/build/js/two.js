"use strict";
let firstname = "Roger"; // infer to string
// fname = 33; not valid
let value = 10; // infer to number
let isValid = true; // false
var AccountType;
(function (AccountType) {
    AccountType[AccountType["SAVING"] = 1] = "SAVING";
    AccountType[AccountType["CURRENT"] = 2] = "CURRENT";
    AccountType[AccountType["FIXED"] = 3] = "FIXED";
})(AccountType || (AccountType = {}));
// uninitialized members implicitly gets assigned with numerical literals
var BillingSchedule;
(function (BillingSchedule) {
    BillingSchedule[BillingSchedule["FREE"] = 0] = "FREE";
    BillingSchedule[BillingSchedule["MONTHLY"] = 1] = "MONTHLY";
    BillingSchedule[BillingSchedule["YEARLY"] = 2] = "YEARLY";
})(BillingSchedule || (BillingSchedule = {}));
let emailEx = RegExp(/^[a-zA-Z0-9._]+@[a-zA-Z]+[a-zA-Z]{2,4}$/);
let email = "james@gmail.com";
console.log(emailEx.test(email)); // true or false
function add(a, b) {
    return a + b;
}
add(4, 5);
//add("Hello", "world"); //Argument of type 'string' is not assignable to parameter of type 'number'.
let numbers = [4, 1, 4];
// "noUncheckedIndexedAccess": true, 
// add(6, numbers[10]);  // fails with "noUncheckedIndexedAccess": true,
const temp = [27, 28, 29, 42, 30];
// feature from Baseline 2022
//    "lib": ["ES2023", "DOM"],
let high = temp.findLast(x => x > 40);
console.log(high);
//  "allowUnreachableCode": false,   
function doTask() {
    return "Hello World";
    // console.log("Task executed"); // unreachable code
}
//Optional parameters ?
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
addAll(3, 4);
addAll(3, 5, 1); // valid
// default values
const sumAll = (a = 10, b, c = 2) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
console.log(sumAll(2, 3, 5));
console.log(sumAll(2, 3)); // c is 2
console.log(sumAll(undefined, 3, 5)); // a is 10
