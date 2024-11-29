# TypeScript

Banuprakash C

Full Stack Architect,

Co-founder & CTO, Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Emails: banuprakashc@yahoo.co.in; banuprakash.cr@gmail.com

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/ts

Softwares Required:

Visual Studio Code.

Chrome Web Browser

NodeJS Latest LTS

=================

TypeScript: is JS with Syntax for types

Strongly typed, statically typed

TypeScript code converts into JS -> run on Browser, NodeJS, Bun , Deno

TypeScript becomes JS via a delete key.

Part 1:
Basic data types, typescript compiler, and configuration file

Global installation of typescript
npm i typescript -g
main component of this is a "tsc" typescript compiler

Create a NodeJS project
* npm init --y ==> package.json
* npm i typescript -D ==> required only for development stage

"typescript": "^5.7.2"

this installs
1)
lib.d.ts ==> Type Declaration files; no defintions
one declaration file including other declaration files
/// <reference lib="es5" />
/// <reference lib="dom" />

2) tsc typescript compiler

tsc one.ts ==> one.js even though we had data type issues in file

3) tsconfig.json ==> typescript configuration files

tsc --init

changes:
 "rootDir": "./src",  
  "outDir": "./build/js",
  "target": "es2016",  
  "noEmitOnError": true, // compile to JS only if no ts errors

tsc

 "module": "commonjs", --> Convert to JS using UMD, AMD, CommonJS, ESM
 CommonJS uses require() for import, module.exports to export
 ESM --> uses export and import
  
 "include": ["src/**/*.ts"] having this tsc will ignore ts files outside of rootDir

 ======

 Data types:
 A) basic data types: string, number, boolean
 B) Enum types
 C) RegExp
 D) function type
 E) Array type 

 ```
 Controlling Globals

  // "types": [],    

  Suppose we install jQuery DOM library; this by default makes jQuery [$] as global member
  "types": ["jQuery"],

  with this we can straight away use it in my ts code $("div"); 
  if not we need to explicilty import

  import * as jquery from 'jquery'

Other scenario is in NodeJS lots of members like __dirname, __filename
are declared as global members

```

//Optional parameters ?
// default values

undefined vs null

let data; //undefined
let data = null; 
prefer null for APIs
In NodeJS callbacks are passed with null instead of undefined if its no relavent

```
fs.readFile('Demo.txt', 'utf8', function (err, data) {
    if(err != null) {
        console.log(data);
    }
});

```

E) any vs unknown
let data:any = doTask(); 
let data:unknown = doTask(); // doTask is a JS code
before using unknown type checking has to be done; not the case with any

Part 1:
infer
string, boolean, number, enum, RegEx, array, any, unknown, function

==================================
Part 2: Complex types

A) The type
to define custom types
a) provide shape of object

```
    type Person = {
        name: string;
        age: number;
    }

    function addPerson(person: Person): void {
        //
    }
    addPerson({"name": "Roger", "age": 32}); //valid
    addPerson({"name": "Roger"}); // invalid
    addPerson({"email": "roger@gmail.com"}); // invalid
```
b) type intersection [ & ]

```
type AdminProps = Person & {
    role: string
}

let admin:AdminProps = {"name": "Roger", "age": 32, "role": "Admin"}
``

c) type Union [ | ]

```
    type Address = string | string[];

    let homeAddress: Address = "M G Road";
    let officeAddress: Address = ["Lavele Road", "Church Street"]

```

d) Extracting type from something else

```
const product = {
    "id": 123,
    "name": "Macbook Laptop",
    "price": 234567.88,
    "supplier": {
        name: "Apple",
        "address": "Redmond, WA"
    }
}

type Supplier = typeof product['supplier']; // Extracting type  from object

function changeSupplier(supplier:Supplier) {
    // 
}

changeSupplier({name:"", "address": ''});
```

using type defintions
 /* Skip type checking all .d.ts files. */
 "skipLibCheck": true    
types.d.ts

======

e) Recursive Types
```
    type NestedNumberArray = number[][][];

    OR
    type NestedNumberArray = number | NestedNumberArray[];

    const data: NestedNumberArray = [1,[2,3], [[4,5], [6,7]]]; //valid

```
Better Example:
```

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
```

f) TypeScript template literal types 
JavaScript template literal ``
TypeScript template literal types build on string literal types and can expand into many strings via unions

g) TypeAssertion aka TypeCasting [as]
Type assertion allows you to set the type of a value and tell the compiler not to infer it.

We have information of the type which TypeScript can't know about.

f) Type Predicate
functions that return a boolean ; has a particular return type syntax [ is ];
allows to narrow or refine the type based on the result of the function

=========

Branded Types
Enhance type safety by attaching a unique "brand" to existing types
Use Cases:
* Validating
* Type specificity
* prevent accedental mixing


======================

void
void operator evaluated the given expression and returns undefined
===============

The interface type
used for shape like "type" and behaviour.

interface interfaceName {
    // shape and behaviour
}

```
    type Counter = {
        interval: number
    }

    interface Counter {
        interval : number;
        (start: number): string;
        reset() : void
    }

    function getCounter(): Counter {
        let counter = function(start: number) {} as Counter;
        counter.interal = 100;
        counter.reset = function() {}
        return counter;
    }
```

Prefer type over interface until required.
* interface is specific to object
type Address = string; // valid
interface Address = string; // invalid

* types allow union types
 type Address = string | string[];
* interface can extend another interface
* interface redeclaration will merge
* using utilities like omit, pick, ... on type is easier than on interface
* Extracting type from something else is possible

=================

* interface and class
* Generics
* using JS in TS
* TS utilities
* Decorators
* Mixins
* Jest for unit testing TS

============================

Day 1 Recap:
basic types: string, number, boolean
enum, RegExp, type
branded type, union type, intersection type
recursive type
interface

==================
Day 2
ts-node is a TypeScript execution engine and REPL for Node.js.
It JIT transforms TypeScript into JavaScript, enabling you to directly execute TypeScript on Node.js without precompiling

ts-node a.ts --> in Memory we have JS transpilled code and execute it

npx ts-node ./src/indexSigExample.ts

Index Signatures in TypeScript:
can be used with "type" or "interface"
In TypeScript, an index signature allows you to define the type of values that an object can hold for keys that aren't explicitly defined. 
It's a way to describe objects with dynamic properties.

```
    interface Transactions {
        [key:string]: number
        pizza:number,
        books: number
    }

    const todaysTx: Transactions = {
        pizza: 343,
        books: 623
    }
    // find total
```

* using keyof instead of Index signature
* Record utlity

===============

class Type
* Specialization relationship ==> extends
* Realization relationship ==> implements

Unlike classes interface can extend multiple classes
interface A extends ClassA, ClassC {}
extends only members not their implementations

===============

Using JS in TS

npm i underscore react
* by using type definition files
* DefinitelyTyped
https://github.com/DefinitelyTyped/DefinitelyTyped

npm i -D @types/react @types/underscore
npm i -D @types/node

======================

Generics: enable write code that can work with variety of data types while maintainig type safety
any or unknown 
function doTask(elems: any[]) {}

Generic Functions
* High Order Functions
-> function which can accept function as arguments
filter, forEach, map, reduce,... ==> all these functions are available for array type
-> function which can return a function
Closure

https://rxmarbles.com/

Memoization is a technique that speeds up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again

Closure:
returned function can access all the members of outer function

Unit testing
* Jasmine
* mocha
* JEST

ts-jest for unit testing typescipt

npm i -D ts-jest @types/jest
npx ts-jest config:init

========

* Generics and keyof
* Conditional Types using Generics
* Mapped Types
A mapped type is a generic type which uses a union of PropertyKey s (frequently created via a keyof ) to iterate through keys to create a type.

===
class generics
TS utilities, Decorator, Mixin, ..

========================

Day 2 Recap:
1) Generics
2) HOF with Generics
3) Memoization with closure
4) Unit testing: ts-jest which internally uses jest and ts-node for on the fly transpile and executing
5) Index paramter, keyof
6) Conditional type
7) Mapped Type 

===============

Day 3

The infer keyword
used with Conditional type to extract or "infer" a type from another type.
Allows to create more dynamic types, flexible type

```
type Capitalized<S> = S extends `${infer C}${infer T}` ? 
            `${C extends keyof CapitalizedChars ? CapitalizedChars[C]: C}${T}` : S

sunday

S extends `${infer C}${infer D}${infer T}`

sunday ==> 
s ==> C
u ==> D
nday ==> T

// space
S extends `${infer C} ${infer D}`

Hello World
C ==> Hello
D ==> World
```

TypeScript utilities:
1) Partial
2) Pick
3) Omit
4) NonNullable
5) ReturnType
6) Parameters
7) Awaited
8) Capitalize
9) Required

https://www.typescriptlang.org/docs/handbook/utility-types.html

============

Decorators and Mixins
-> code reusability and help avoid limitations associated with multiple inheritance
-> applicable for object types

Decorators:
1) class decorator
2) method decorator
3) property decorator
4) parameter decorator

Specialization vs Decorator

React uses Specialization 
```
    public class ProductCard extends Component {
        componentDidMount() {
            //
        }
    }
 
```

Angular uses Decorator pattern
```
@Component({
    template: `
        <div>
            {name}
        <div>
    `,
    styleUrl: '../styles/style.css'
})
public class ProductCard {
    name: string;
}
ProductCard will have name and template, styleUrl
```

New project:
"experimentalDecorators": true,

Class Decorator functions: should take constructor as argument

Property Decorator: Field Decorator
function (target:any, propertyKey:string) {}

Method level decorator
function (target:any, methodName: string, descriptor?:PropertyDescriptor)

====================

Metadata Proposal - https://rbuckton.github.io/reflect-metadata/
"emitDecoratorMetadata": true,  
Object.defineProperty

npm i reflect-metadata

===

Mixins
function that takes constructor, creates a class with new functionalities return a new class

