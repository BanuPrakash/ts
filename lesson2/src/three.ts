
type Json = 
 |null
 |undefined
 |boolean
 |string
 |number
 | Json[] // recursive type
 | {[key:string] : Json}

 const person:Json = {name: 'Jack'}

 const people:Json = [{name: 'Peter', age: 24}, {name :' Roger', email: undefined}]