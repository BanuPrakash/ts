
// function isString(x: unknown): boolean {
function isString(x: unknown): x is string {
    return typeof x === 'string';
}

function reverseString(x: unknown) {
    if(isString(x)) {
        // (x as string).toUpperCase();
        // return (x as string).split('').reverse().join('');
        // here x is infered to string
        return x.split('').reverse().join('');
    }
}

console.log(reverseString('Hello World'));