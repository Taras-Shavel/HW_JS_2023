//Task
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

//Answers
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function inner(a, b){
//     return a * b;                            //Done
// }
// let x = inner(5, 4)
// console.log(x)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function radius(r){
//     const PI = 3.14;
//     r = r * r;
//     S = PI * r;                      //Done
//     return S;
// }
// let result = radius(10);
// console.log(result);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function  radius(r, h){
//     const PI = 3.14;
//     S = 2 * PI * r *(r + h);                 //Done
//     return S;
// }
// let result = radius(30, 22)
// console.log(result)

// - створити функцію яка приймає масив та виводить кожен його елемент
// let users = ['Taras','Vasya','Anna','Alina']
// function array(arr){
//     for (const element of arr) {             //Done
//         console.log(element)
//     }
// }
// array(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function looper(text){
//     document.write(`<div><p>${text}</p></div>`)          //Done
// }
// looper('Hello okten!')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function create(description){
//     document.write(`<div>
//                         <ul>
//                             <li>${description}</li>
//                             <li>${description}</li>          //Done
//                             <li>${description}</li>
//                         </ul>
//                     </div>`)
// }
// create('lorem')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function create(description, count) {
//     document.write(`<div>`)
//         document.write(`<ul>`)
//             for (let i = 0; i < count; i++) {
//                 document.write(`<li>${description}</li>`)                //Done
//             }
//         document.write(`</ul>`)
//     document.write(`</div>`)
//
// }
// create('hello okten!', 51)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let mas = [true, 'Hello', 111, 222, 'top', false];
// function array(arr) {
//     document.write(`<div>`)
//         document.write(`<ul>`)
//             for (const element of arr) {
//                 document.write(`<li>${element}</li>`)            //Done
//             }
//         document.write(`</ul>`)
//     document.write(`</div>`)
// }
// array(mas);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function obj(id, name, age){
    let array = [
        {id: id, name: name, age: age},                          //Don't Done
    ]
    console.log(array)
    document.write(array)
}
obj(1, 'hello', 23)


// - створити функцію яка повертає найменьше число з масиву         // Done
// let arrNumber = [21, 10, 1, 456, 87, 90, 34];
// function ret(myArr){
//     let i = arrNumber.length;
//     let min = arrNumber[i - 1]
//     while(i--){
//         if(myArr[i] < min){
//             min = myArr[i]
//         }
//     }
//     return min
// }
// let x = ret(arrNumber)
// console.log(x)


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let numberArray = []
// function sum(arr){
//     let result = 0;
//     for (const element of arguments) {                           //Done
//         result = result + element;
//     }
//     return result;
// }
// let x = sum(1, 2, 10)
// console.log(x)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]                  //Don't Don't


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


