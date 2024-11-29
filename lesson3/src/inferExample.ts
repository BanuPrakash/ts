type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never

// R is a new type, retruned value is deduced into R

function doTask() {
    return {
        name: "Danny",
        age: 30
    }
}

function add(x: number, y: number, z: string) {
    return x + y;
}

// type Result = ReturnTypeOf<typeof add>
type Result = ReturnTypeOf<typeof doTask>

// Example 2
// extract the first argument type of a function
type FirstArgumentType<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : never
// type FirstArg = FirstArgumentType<typeof fetch>
type FirstArg = FirstArgumentType<typeof add>

// Extracting paramter types

type MyParam<T> = T extends (...args: infer P) => any ? P : never

type Params = MyParam<typeof add>

const paramData: Params = [4, 7, "add"];

type UserT = {
    id: number;
    name: string
}
function doTaskss(user:UserT){

}
