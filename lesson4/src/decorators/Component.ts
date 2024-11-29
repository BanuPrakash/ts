// export function Component(construtor:Function) {
//     console.log(construtor)
//     construtor.prototype.template = `<div className="card"></card>`
// }

// decorator factory
export function Component(config: any) {
    // return function (constructor: Function) {
    return function<T>(constructor: new (...args: any[]) => T)  {
        console.log(constructor)
        constructor.prototype.template = config.template // closure
        //Object.defineProperty(this, 'template', {
        //value: config.template,
        //writable: false,
        // });
    }
}