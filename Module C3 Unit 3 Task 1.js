//Задание 1

//Написать, функцию, которая принимает в качестве аргумента объект и
//выводит в консоль все ключи
// и
// значения только собственных свойств.
//Данная функция не должна возвращать значение.

// Create parent object
const obj = {
    a: 100,
    b: true,
    c5: 'text'
};

// Create child object obj1 from obj for function objKeysVal testing
const obj1 = Object.create(obj);
// Add on own property .d
obj1.d = 200;

//Function declaration
function objKeysVal(obj) {
    for (let key in obj) {

        if (obj.hasOwnProperty(key)) {
            console.log(`Ключ: ${key}, значение: ${obj[key]}. Собственное свойство!`);
        } else {
            console.log(`Ключ: ${key}`);
        }
    }
}
// Call function
objKeysVal(obj1);