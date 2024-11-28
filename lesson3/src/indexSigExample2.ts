// Index Signature in TS
/*
    [key: key_type]: value_type
*/
// shape of object
interface User {
    readonly [index:string]: any
    name: string;
    age: number;
    hobbies: string[]
}

const person: User = {
    name: 'Roger',
    age: 34,
    hobbies: ['chess', 'reading']
}

console.log(person['name']); // works fine

let field = 'age'; // dynamic
console.log(person[field]); //fails



Object.keys(person).map(key => {
    console.log(person[key])
})

for(const key in person) {
    console.log(person[key]);
}