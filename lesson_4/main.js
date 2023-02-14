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
function inner(a, b){
    return a * b;
}
let x = inner(5, 4)
console.log(x)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function radius(r){
    const PI = 3.14;
    r = r * r;
    S = PI * r;
    return S;
}
let result = radius(10);
console.log(result);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function  radius(r, h){
    const PI = 3.14;
    S = 2 * PI * r *(r + h);
    return S;
}
let result = radius(30, 22)
console.log(result)

// - створити функцію яка приймає масив та виводить кожен його елемент
let users = ['Taras','Vasya','Anna','Alina']
function array(arr){
    for (const element of arr) {
        console.log(element)
    }
}
array(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function looper(text){
    document.write(`<div><p>${text}</p></div>`)
}
looper('Hello okten!')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUl(description){
    document.write(`<div>
                        <ul>
                            <li>${description}</li>
                            <li>${description}</li>          
                            <li>${description}</li>
                        </ul>
                    </div>`)
}
createUl('lorem')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function create(description, count) {
    document.write(`<div>`)
        document.write(`<ul>`)
            for (let i = 0; i < count; i++) {
                document.write(`<li>${description}</li>`)
            }
        document.write(`</ul>`)
    document.write(`</div>`)

}
create('hello okten!', 51)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let mas = [true, 'Hello', 111, 222, 'top', false];
function array(arr) {
    document.write(`<div>`)
        document.write(`<ul>`)
            for (const element of arr) {
                document.write(`<li>${element}</li>`)
            }
        document.write(`</ul>`)
    document.write(`</div>`)
}
array(mas);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function obj(numObjects){
    for (let element of numObjects) {
        document.write(`<div>${element.id}, ${element.name}, ${element.age}</div>`)
    }
    return numObjects
}
obj([{id: 1, name: 'hello', age: 58}])


// - створити функцію яка повертає найменьше число з масиву
let arrNumber = [21, 10, 1, 456, 87, 90, 34];
function ret(myArr){
    let minNumber = myArr[0]
    for (let myArrElement of myArr) {
        if(minNumber > myArrElement){
            minNumber = myArrElement;
        }
    }
    return minNumber
}
let x = ret(arrNumber)
console.log(x)


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr){
    let suma = 0
    for (const element of arr) {
        suma = suma + element
    }
    return suma
}
let x = sum([1, 2, 3])
console.log(x)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2){
     let version1 = arr[index1];
     let version2 = arr[index2];

    arr[index1] = version2;
    arr[index2] = version1;

    return arr
}
let print = swap([11, 22, 33, 44, 55], 0, 3);
console.log(print)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exhange(sumUa, currencyValues, exhangeCurrency){
    for (let element of currencyValues) {
        if(element.currency === exhangeCurrency){
             let result = sumUa / element.value
            console.log(result)
        }
    }
    return result;
}
exhange(10000,
        [
            {currency: 'USD', value: 40},
            {currency: 'EUR', value: 42},
            {currency: 'PL', value: 8}
        ],
        'EUR')

