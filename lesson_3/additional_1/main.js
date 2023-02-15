// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
//
//Answers
//
// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let  mas_1 = [111, 222, 333, 444, 555];
// console.log(mas_1)
// document.write(mas_1)
//
// let mas_2 = ['Hello','okten','and','Hello','world']              //Done
// console.log(mas_2)
// document.write(mas_2)
//
// let mas_3 = ['Hello', 123, true, 'okten', false]
// console.log(mas_3)
// document.write(mas_3)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let mas =[];
// console.log(mas); //output empty Array
// mas[0] = 'simple';
// mas[1] = 'hello';                                                  //Done
// mas[2] = 111;
// mas[3] = false;
// console.log(mas); // output Array with values

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// let main_mas = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];         //Array
// 1. перебрати його циклом while
// let i = 0;
// while (i < main_mas.length){
//     let main = main_mas[i];                  //Done
//     console.log(main)
//     i++
// }
// 2. перебрати його циклом for
// for (const mainMa of main_mas) {
//     console.log(mainMa)                      //Done
//
// }
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 1;
// while (i < main_mas.length){
//     let main = main_mas[i];
//     console.log(`Index: ${i}, Numbers: ${main}`)         //Done
//
//     i += 2
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 1; i < main_mas.length; i+=2) {
//     let mainMa = main_mas[i];                            //Done
//     console.log(`Index: ${i}, Numbers: ${mainMa}`)
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < main_mas.length){
//     let mas = main_mas[i]                                //Done
//     if(mas % 2 === 0){
//         console.log(mas)
//     }
//     i++
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < main_mas.length; i++) {
//     let mainMa = main_mas[i];
//     if(mainMa % 2 === 0){                                   //Done
//         console.log(`Index: ${i}, Numbers: ${mainMa}`)
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let mas of main_mas) {
//     if(mas % 3 === 0){
//        mas = 'okten';                                    //Done
//         console.log(mas)
//     }
// }
// 8. вивести масив в зворотньому порядку.
// for (let i = main_mas.length - 1; i >= 0; i--) {
//     const mainMa = main_mas[i];                          //Done
//     console.log(mainMa)
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//9.1
// let i = main_mas.length - 1;
// while (i >= 0){
//     let main = main_mas[i];                              //Done
//     console.log(main)
//     i--
// }
//9.2
// for (let i = main_mas.length - 1; i >= 0; i--) {
//     const mainMa = main_mas[i];                          //Done
//     console.log(mainMa)
// }
//9.3
// let i = main_mas.length - 1
// while (i >= 0){
//     let main = main_mas[i];
//     console.log(`Index: ${i}, Numbers: ${main}`)             //Done
//
//     i -= 2
// }
//9.4
// for (let i = main_mas.length - 1; i >= 0; i-=2) {
//     let mainMa = main_mas[i];                            //Done
//     console.log(`Index: ${i}, Numbers: ${mainMa}`)
// }
//9.5
// let i = main_mas.length - 1;
// while (i >= 0){
//     let mas = main_mas[i]                                //Done
//     if(mas % 2 === 0){
//         console.log(mas)
//     }
//     i--
// }
//9.6
// for (let i = main_mas.length - 1; i >= 0; i--) {
//     let mainMa = main_mas[i];
//     if(mainMa % 2 === 0){                                   //Done
//         console.log(`Index: ${i}, Numbers: ${mainMa}`)
//     }
// }
//9.7
// for (let mas of main_mas) {
//     if(mas % 3 === 0){
//        mas = 'okten';                                    //Done
//         console.log(mas)
//     }
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let x = [111, 222, 333, 444, 555, 666, 777, 888, 999, 100];
// for (let y of x) {                                           //Done
//     console.log(y)
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let a = ['hello','okten','school','and','hello','world!','Okten','School','the','best'];
// for (const b of a) {                                         //Done
//     console.log(b)
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let x = ['hello', 'okten', 222, 222, true, false, 333, 'hello', 'world'];
// for (let y of x) {                                           //Done
//     console.log(y)
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let x = ['hello', 'okten', 222, 222, true, false, 333, 'hello', 'world'];
// for (let i = 0; i < x.length; i++) {
//     let y = x[i];
//     if(typeof(y) === "boolean"){                             /Done
//         console.log(y)
//     }
//
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let x = ['hello', 'okten', 222, 222, true, false, 333, 'hello', 'world'];
// let i = 0;
// while(i < x.length){
//     let y = x[i];
//     if(typeof(y) === "number" ){                             //Done
//         console.log(y)
//     }
//     i++;
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let x = ['hello', 'okten', 222, 222, true, false, 333, 'hello', 'world'];
// let i = 0;
// while(i < x.length){
//     let y = x[i];
//     if(typeof(y) === "string" ){                             //Done
//         console.log(y)
//     }
//     i++;
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let x = [];
// x[0] = 'hello';
// x[1] = 'world!';
// x[2] = 2003;
// x[3] = false;                                    //Done
// x[4] = 1003;
// x[5] = true;
// for (let y of x) {
//     console.log(y)
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i)
//     document.write(`<div>`)                  //Done
//         document.write(i)
//     document.write(`</div>`)
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i)
//     document.write(`<div>`)              //Done
//         document.write(i)
//     document.write(`</div>`)
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(i)
//     document.write(`<div>`)              //Done
//         document.write(i)
//     document.write(`</div>`)
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if(i % 2 === 0){                        //Done
//         console.log(i)
//         document.write(`<div>`)
//             document.write(i)
//         document.write(`</div>`)
//     }
// }
// let i = 0;
// while(i < 100){
//     console.log(`Index: ${i}`)                   //Done
//     document.write(`<div>`)
//     document.write(i)
//     document.write(`</div>`)
//     i += 2;
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i < 100; i+=2) {                        //Done
//     console.log(`Index: ${i}`)
//         document.write(`<div>`)
//             document.write(i)
//         document.write(`</div>`)
// }
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        title: 'Кобзар',
        pages: 235,
        authors: ['Тарас Шевченко','Леся Українка'],
        genre: ['Поетичні твори', 'Драматичний твір'],
    },
    {
        title: 'Кайдашева сімя',
        pages: 435,
        authors: ['Іван Нечуй-Левицкий'],                     //Done
        genre: ['Повість'],
    },
    {
        title: 'Лісова пісня',
        pages: 351,
        authors: ['Леся Українка', 'Тарас Шевченко'],
        genre: ['Драматичний твір', 'Поетичні твори', 'Повість'],
    }
];
// -знайти наібльшу книжку.
// if((books[0].pages > books[1].pages) && (books[0].pages > books[2].pages)){
//     console.log(`Max pages: ${books[0].pages}`)
// }else if((books[1].pages > books[2].pages) && (books[1].pages > books[0].pages)){
//     console.log(`Max pages: ${books[1].pages}`)
// }else if((books[2].pages > books[0].pages)&&(books[2].pages > books[1].pages)){
//     console.log(`Max pages: ${books[2].pages}`)
// }
// - знайти книжку/ки з найбільшою кількістю жанрів
// for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     if(book.genre.length > book.genre.length[-1]){
//         console.log(book.genre)
//     }
// }
// if((books[0].genre.length > books[1].genre.length) && (books[0].genre.length > books[2].genre.length)){
//     console.log(`Title book: ${books[0].title}, Genre Book: ${books[0].genre}`)
// }else if((books[1].genre.length > books[2].genre.length) && (books[1].genre.length > books[0].genre.length)){
//     console.log(`Title book: ${books[1].title}, Genre Book: ${books[1].genre}`)
// }else if((books[2].genre.length > books[0].genre.length)&&(books[2].genre.length > books[1].genre.length)){
//     console.log(`Title book: ${books[2].title}, Genre Book: ${books[2].genre}`)
// }
// - знайти книжку/ки з найдовшою назвою
// for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     if(book.title.length > book.title.length-1) {
//         console.log(book.title)
//     } else{
//         console.log('loh')
//     }
//
// }
// - знайти книжку/ки які писали 2 автори
// for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     if(book.authors.length === 2){
//         console.log(`Title book: ${book.title}`)                //Done
//     }
//
// }

// - знайти книжку/ки які писав 1 автор
// for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     if(book.authors.length === 1){
//         console.log(`Title book: ${book.title}`)             //Done
//     }
//
// }






