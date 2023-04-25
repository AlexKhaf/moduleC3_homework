// Задание 2
//
// Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет, есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

// Testing object
obj = {
    a:1,
    b:2
};
// Testing strings
str1 = 'c';
str2 = 'a';
function keyInObjCheck(str, obj) {
    return (str in obj);
};

res1 = keyInObjCheck(str1, obj);
res2 = keyInObjCheck(str2, obj);
console.log(res1 ? `Свойство ${str1} есть в объекте` : `Свойства ${str1} нет в объекте`);
console.log(res2 ? `Свойство ${str2} есть в объекте` : `Свойства ${str2} нет в объекте`);