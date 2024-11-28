// keyof instead of Index Signature in TS
/*
    [key: key_type]: value_type
*/
// shape of object
interface Student {
    name: string;
    age: number;
}

const student: Student = {
    name: 'Roger',
    age: 34
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})

