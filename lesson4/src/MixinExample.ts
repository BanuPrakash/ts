

type ConstructorType<T = {}> = new (...args: any[]) => T;

// create a Mixin that adds property
function TimeStamped<TBase extends ConstructorType>(Base: TBase) {
    return class extends Base {
        timestamp = Date.now()
    }
}

function Activatable<TBase extends ConstructorType>(Base: TBase) {
    return class extends Base {
        isActivated = false;
        activate() {
            this.isActivated = true;
        }
    }
}

class Animal {
    name = "Terry";
}

const AnimalWithTimeStamp = TimeStamped(Activatable(Animal));

const animal = new AnimalWithTimeStamp();
console.log(animal.name);
// @ts-ignore
console.log(animal.timestamp);
console.log(animal.isActivated);
animal.activate();
console.log(animal.isActivated);