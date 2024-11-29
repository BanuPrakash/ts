import 'reflect-metadata';

function Min(limit: number) {
    return Reflect.metadata('min', limit);
}

class User {
    @Min(3)
    name: string = "ro";
}

function validateUser(user: User) {
    const min = Reflect.getMetadata('min', User.prototype, 'name'); // 3
    console.log(user);
    if (min && user.name.length < min) {
        throw new Error(`Name should be min ${min}`)
    }
}

const user = new User();
validateUser(user);