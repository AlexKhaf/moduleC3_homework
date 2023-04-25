// Задание 3
//
// Написать функцию, которая создает пустой объект, но без прототипа.

function createObjNoProto() {
    return Object.create(null);
}

obj1 = createObjNoProto();
console.log(Object.getPrototypeOf(obj1));