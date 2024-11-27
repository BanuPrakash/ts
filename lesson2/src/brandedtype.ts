
type NotZero = number & {__brand: 'NotZero'};

// type predicate
// function isNotZero(input: unknown): input is NotZero {
//     return (input as number) !== 0;
// }

 function isNotZero(input: unknown): asserts input is NotZero {
     if(input === 0) throw new Error('Division by Zero');
 }
 
function divide(a: number , b: number) {
    return a / b;
}

let a = 10;

let b = 0;

// divide(a , b);

// scenario 1
// if(isNotZero(b)) {
//     console.log(divide(a, b));
// }

// scenario 2

isNotZero(b); 
console.log(divide(a, b));