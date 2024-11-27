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