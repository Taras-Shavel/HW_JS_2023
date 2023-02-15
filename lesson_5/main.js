//task
// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//   Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//   Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

//Answer
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let calculator = (a, b) => a * b;
console.log(calculator(10, 5))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let calculator = (r) =>{
    const PI = 3.14;
    r = r * r;
    return PI * r;
}
console.log(calculator(10))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let calculatorRadius = (h, r) => 2 * 3.14 * r *(r + h);
console.log(calculatorRadius(30, 25))

// - створити функцію яка приймає масив та виводить кожен його елемент
let array = ['My', 'name', 'is', 'Taras', 22, 33, true];
let block = (arr) =>{
    for (let element of arr) {
        console.log(element)
    }
}
block(array);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let text = (enterText) => {
    document.write(`Your text: ${enterText}`)
}
text('hello okten!')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let blockLi =(textForLi) => {
    document.write(`
    <div>
        <ul>
            <li>${textForLi}</li>
            <li>${textForLi}</li>                    
            <li>${textForLi}</li>
        </ul>
    </div>`);
}
blockLi('hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let block = (text, count) =>{
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
block('hello world!', 20)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let list = [11, 22, 33, 'lorem', true, 'world', false];
let mas = (arr) => {
    document.write(`<ul>`)
    for (let element of arr) {
        document.write(`<li>${element}</li>`)
    }
    document.write(`</ul>`)
}
mas(list)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//   Для кожного об'єкту окремий блок.
let ArrayObject = (arrObj) =>{
    for (let element of arrObj) {
        document.write(`<div>${element.id}${element.name}${element.age}</div>`)
    }
    return arrObj;
}
ArrayObject([{id:1,name:'okten',age:22}]);

// - створити функцію яка повертає найменьше число з масиву
let minNumber = (arr) => {
    let number = arr[0]
    for (let element of arr) {
        if (number > element){
            number = element
        }
    }
    return number
}
let print = minNumber([12,34,87,2356,8])
console.log(print)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//   Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let number = 0;
    for (let element of arr) {
        number += element;
    }
    return number
}
let print = sum([1,2,10]);
console.log(print)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
   let ver1 = arr[index1];
     let ver2 = arr[index2];

   arr[index1] = ver2;
   arr[index2] = ver1;

    return arr
}
let print = swap([11,22,33,44],2, 1);
console.log(print)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (let element of currencyValues) {
        if (exchangeCurrency === element.currency){
            let result;
            result = sumUAH / element.value;
            console.log(result);
        }

    }
    return result;
}
exchange(10000,
    [
        {currency:'USD',value:40},
        {currency:'EUR',value:42},
        {currency:'PL', value:8},
        {currency:'CHF',value: 41}
    ],
    'PL');





