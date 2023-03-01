// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let Users = [
//     new User(7, 'Taras', 'Shavel', 'taras.shavel@gmail.com', 978317351),
//     new User(1, 'Nazar', 'Shavel', 'nazar.shavel@gmail.com', 678317357),
//     new User(2, 'Olya', 'Shavel', 'olya.shavel@gmail.com', 678717352),
//     new User(3, 'Alina', 'Shavel', 'alina.shavel@gmail.com', 778317357),
//     new User(4, 'Andriy', 'Shavel', 'andriy.shavel@gmail.com', 678317353),
//     new User(5, 'Oleg', 'Shavel', 'oleg.shavel@gmail.com', 278317350),
//     new User(6, 'Ostap', 'Shavel', 'ostap.shavel@gmail.com', 478317354),
// ]
// console.log(Users)

// - Взяти масив з User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterUsers = Users.filter(User => User.id % 2 === 0);
// console.log(filterUsers)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sortUser = Users.sort((a, b) => a.id - b.id);
// console.log(sortUser)

// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let Clients = [
//     new Client(1, 'Nazar', 'Shavel', 'nazar.shavel@gmail.com', 678317357, ['milk','apple','banana']),
//     new Client(2, 'Olya', 'Shavel', 'olya.shavel@gmail.com', 678717352, ['limon','orange']),
//     new Client(3, 'Alina', 'Shavel', 'alina.shavel@gmail.com', 778317357, ['strawberry','water','juice','potato']),
//     new Client(4, 'Andriy', 'Shavel', 'andriy.shavel@gmail.com', 678317353, ['tomato','apple']),
//     new Client(5, 'Oleg', 'Shavel', 'oleg.shavel@gmail.com', 278317350, ['salt','paper','cabbage','potato']),
//     new Client(6, 'Ostap', 'Shavel', 'ostap.shavel@gmail.com', 478317354, ['milk','apple','banana']),
//     new Client(7, 'Taras', 'Shavel', 'taras.shavel@gmail.com', 978317351, ['coca-cola','mivina']),
// ]
// console.log(Clients)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sortClients = Clients.sort((a, b) => a.order.length - b.order.length);
// console.log(sortClients)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Cars(model, manufacturer, yearOfManufacture, maximumSpeed, engineCapacity) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.yearOfManufacture = yearOfManufacture;
//     this.maximumSpeed = maximumSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drivers = [];
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maximumSpeed} на годину`)
//     }
//     this.info = function () {
//         console.log(`
//             *****INFO*****
//             Model: ${model},
//             Manufacturer: ${manufacturer},
//             Year of Manufacture: ${yearOfManufacture},
//             Maximum speed: ${maximumSpeed},
//             Engine Capacity: ${engineCapacity}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         let speed = this.maximumSpeed += newSpeed
//         console.log(`New Maximum Speed: ${speed}`)
//     }
//     this.changeYear = function (newValue) {
//         this.yearOfManufacture = newValue
//         console.log(`New Year of Manufacture: ${newValue}`)
//     }
//     this.addDriver = function (name, surname, age, exp) {
//         this.drivers.push(new Driver(name, surname, age, exp))
//     }
//     function Driver(name, surname, age, exp){
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.exp = exp;
//     }
// }
//
// let cars = new Cars('Roque', 'Nissan', 2015, 200, 2500);
// console.log(cars)
// cars.drive()
// cars.info()
// cars.increaseMaxSpeed(50)
// cars.changeYear(2019)
// cars.addDriver('Taras','Shavel', 19, 2)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Cars {
//     constructor(model, manufacturer, yearOfManufacture, maximumSpeed, engineCapacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.yearOfManufacture = yearOfManufacture;
//         this.maximumSpeed = maximumSpeed;
//         this.engineCapacity = engineCapacity;
//         this.drivers = [];
//
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${maximumSpeed} на годину`)
//         }
//         this.info = function () {
//             console.log(`
//             *****INFO*****
//             Model: ${model},
//             Manufacturer: ${manufacturer},
//             Year of Manufacture: ${yearOfManufacture},
//             Maximum speed: ${maximumSpeed},
//             Engine Capacity: ${engineCapacity}`)
//         }
//         this.increaseMaxSpeed = function (newSpeed) {
//             let speed = this.maximumSpeed += newSpeed
//             console.log(`New Maximum Speed: ${speed}`)
//         }
//         this.changeYear = function (newValue) {
//             this.yearOfManufacture = newValue
//             console.log(`New Year of Manufacture: ${newValue}`)
//         }
//         this.addDriver = function (name, surname, age, exp) {
//             this.drivers.push(new Driver(name, surname, age, exp))
//         }
//
//         class Driver{
//             constructor(name, surname, age, exp) {
//                 this.name = name;
//                 this.surname = surname;
//                 this.age = age;
//                 this.exp = exp;
//             }
//         }
//     }
// }
// let cars = new Cars('Roque', 'Nissan', 2015, 200, 2500);
// console.log(cars)
// cars.drive()
// cars.info()
// cars.increaseMaxSpeed(50)
// cars.changeYear(2019)
// cars.addDriver('Taras','Shavel', 19, 2)
// cars.addDriver('Ostap','Shavel', 29, 10)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Person{
//     constructor(name, age) {
//         this.name = name;
//         this.ag = age
//     }
// }
// class Popelushka extends Person{
// constructor(name, age, sizeFoot) {
//     super(name, age);
//     this.sizeFont = sizeFoot;
//     }
// }
// class Prince extends Person{
//     constructor(name, age, sizeShoes) {
//         super(name, age);
//         this.sizeShoes = sizeShoes
//     }
//     findPopelushka(arr) {
//         for (let girl of arr) {
//             if(girl.sizeFont === this.sizeShoes){
//                 return girl;
//             }
//         }
//     }
//
// }
// let arrPopel = [
//     new Popelushka('Alina',19, 36),
//     new Popelushka('Anna',29, 39),
//     new Popelushka('Tanya',23, 42),
//     new Popelushka('Marta',25, 36),
//     new Popelushka('Olya',30, 43),
//     new Popelushka('Iryna',27, 37),
//     new Popelushka('Natalia',29, 38),
//     new Popelushka('Anna',39, 39),
//     new Popelushka('Olya',21, 40),
// ]
// let prince = new Prince('Kolya', 23, 36)
// console.log(arrPopel)
// console.log(prince.findPopelushka(arrPopel))