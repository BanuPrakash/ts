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
* using JS in TS
* TS utilities
* Decorators
* Mixins
* Jest for unit testing TS

