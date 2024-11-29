// type ConstructorType<T> = new (...args:any[]) => T
// function Log(constructor:Function) {
// called each time we instantiate
export function Log<T>(target: new (...args: any[]) => T) {
    const originalConst = target;
    
    function newConstructor(...args: any[]) {
        console.log(`Creating instance of ${originalConst.name} with arguments :`, args);
        return new originalConst(...args);
    }
    newConstructor.prototype = originalConst.prototype;
    return newConstructor as any;
}