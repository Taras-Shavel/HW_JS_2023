//Завдання:
//
// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
//Відповідь:
//
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let elements = ['name', 'age', true, 111, 'select', false, 222, true, 333, false]
console.log(elements) //ввиводимо всі елементи масива в консоль

console.log(elements[0]) //ввиводимо певний елемент масива в консоль(Наприклад: індекс 0)
console.log(elements[7]) //ввиводимо певний елемент масива в консоль(Наприклад: індекс 7)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book_1 = {
    title: 'Книга Скриня',      //Назва
    pageCout: 244,              //Кількість сторінок
    genre: 'Фантастика',        //жанр
};
console.log(book_1)             //Вивід в консоль
let book_2 = {
    title: 'Гімн',              //Назва
    pageCout: 124,              //Кількість сторінок
    genre: 'Культура',          //жанр
};
console.log(book_2);            //Вивід в консоль
let book_3 = {
    title: 'Війна',             //Назва
    pageCout: 306,              //Кількість сторінок
    genre: 'Історія',           //жанр
};
console.log(book_3);            //Вивід в консоль

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book_1_1 = {
    title: 'Книга Скриня',      //Назва
    pageCout: 244,              //Кількість сторінок
    genre: 'Фантастика',        //жанр
    authors: [{name: 'Тарас Шевченко ', age: 36}] //Кожен автор має поля name та age.
};
console.log(book_1_1)             //Вивід в консоль
let book_2_2 = {
    title: 'Гімн',              //Назва
    pageCout: 124,              //Кількість сторінок
    genre: 'Культура',          //жанр
    authors: [{name: 'Леся Українка', age: 41}] //Кожен автор має поля name та age.
};
console.log(book_2_2);            //Вивід в консоль
let book_3_3 = {
    title: 'Війна',             //Назва
    pageCout: 306,              //Кількість сторінок
    genre: 'Історія',           //жанр
    authors: [{name: 'Тарас Бульба', age: 56}] //Кожен автор має поля name та age.
};
console.log(book_3_3);            //Вивід в консоль

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Taras', userName: 'Taras_325', password: 1111},
    {name: 'Oleg', userName: 'Oleg_Oleg', password: 2222},
    {name: 'Olya', userName: 'Pro_100_Olya', password: 3333},
    {name: 'Vasya', userName: 'Vasya_Simple', password: 4444},
    {name: 'Pavlo', userName: 'Pavlo_P', password: 5555},
    {name: 'Bohdan', userName: 'Bohdan_1', password: 6666},
    {name: 'Alina', userName: 'Alina_A', password: 7777},
    {name: 'Ostap', userName: 'Ostap_Ostap', password: 8888},
    {name: "Anna", userName: 'Anna_na', password: 9999},
    {name: 'Nastya', userName: 'Nastya_100', password: 1000}
];

console.log(users)      // Виводимо весь масив в консоль

console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)      // виводимо пароль кожного користувача в консоль
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)





