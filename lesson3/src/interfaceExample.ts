class A {
    public name: string = "";

    doTask(a: number, b: string) {

    }
}

class B {
    public name: string = "";
    public age: number = 18;

    doTasks(a: number, b: string, c: number) {

    }
}

interface C extends Omit<A, "name">, B {

}

let obj: C = {
    name: "A",
    age: 22,
    doTask: () => { },
    doTasks: () => { },
}