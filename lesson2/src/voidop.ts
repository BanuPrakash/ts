let result = void (1 + 1) // result is undefined

type User = {}
let users:User[] = [];

//const addUser = (user:User) => users.push(user);
// here addUser return type is number which is unintended

// Solution:
const addUser = (user:User) => void users.push(user);