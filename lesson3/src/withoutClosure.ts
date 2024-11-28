
function fibanocci(no: number): number {
    if(no == 0 || no == 1) return no;
    else return fibanocci(no - 1) + fibanocci(no -2);
}

console.time("first");
    console.log(fibanocci(40));
console.timeEnd("first");

console.time("second");
    console.log(fibanocci(40)); //we should have cached and return from cache
console.timeEnd("second");