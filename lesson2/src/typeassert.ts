

const myDiv = document.getElementById("card");

const myBtn = document.getElementById('btn') as HTMLButtonElement

// OR

const myBtn2 = <HTMLButtonElement>document.getElementById('btn'); // can't use in JSX / TSX

let fname: string = 'Roger';

// Type Assertion

// let lname = <string|number>fname; 
let lname = fname as string | number;

lname = 'Peter';
lname = 100; //valid

const addOrConcat = (a: number, b: number, operation: 'add' | 'concat'): number | string => {
    if(operation == 'add') return a + b;
    return "" + a + b;
}

let myVal: string = addOrConcat(2, 4, 'concat') as string ; // 24