export default function Range(config: any) {
    return function (target: any, propertyKey: string) {
        let value: number;
        const getter = function () {
            return value;
        }
        const setter = function (newVal: number) {
            if (newVal < config.min || newVal > config.max) {
                throw new Error(`Value ${newVal} is out of Range [${config.min}, ${config.max}]`)
            }
            value = newVal
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        })
    }
}