// export function Component(construtor:Function) {
//     console.log(construtor)
//     construtor.prototype.template = `<div className="card"></card>`
// }

// decorator factory
export function Component(config: any) {
    return function (construtor: Function) {
        console.log(construtor)
        construtor.prototype.template = config.template // closure
    }
}