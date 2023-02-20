//task
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

//Answer

// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let a = 'hello world';
console.log(a.length);

let b = 'lorem ipsum';
console.log(b.length);

let c = 'javascript is cool';
console.log(c.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let a = 'hello world';
let b = 'lorem ipsum';
let c = 'javascript is cool';
console.log(`${a.toUpperCase()}, ${b.toUpperCase()}, ${c.toUpperCase()}`)

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let a = 'HELLO WORLD';
let b = 'LOREM IPSUM';
let c = 'JAVASCRIPT IS COOL';
console.log(`${a.toLowerCase()}, ${b.toLowerCase()}, ${c.toLowerCase()}`);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let newStr = str.replace(' ', '')
let endWith = newStr.endsWith('  ');
let string = newStr.replace(endWith, '');
console.log(string)

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';
function stringToarray(str){
    return str.split(' ');
}
let arr = stringToarray(str);
console.log(arr)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10,8,-7,55,987,-1011,0,1050,0];
let mup = numbers.map(value => {
    let str = '';
    return  str + value;
} )
console.log(mup)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
function sortNums(arr, direction){
    if(direction === 'ascending'){
        console.log(arr.sort((a, b) => a - b));
    }else if(direction === 'descending'){
        console.log(arr.sort((a, b) => b - a))
    }
}
sortNums(nums, 'ascending')

// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sort = coursesAndDurationArray.sort((a, b) => {
    return a.monthDuration - b.monthDuration
} );
console.log(sort)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter = coursesAndDurationArray.filter(user => {
    if(user.monthDuration > 5){
        return user;
    }
});
console.log(filter)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let map = coursesAndDurationArray.map((value, index) => {
    return {id: index + 1, title: value.title, monthDuration: value.monthDuration};
});
console.log(map)

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let allCarts = [
    {
        cardSuit: 'spade',
        value: ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'],
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'],
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'],
        color: 'red'
    },
    {
        cardSuit: 'club',
        value: ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'],
        color: 'black'
    }
]

// - знайти піковий туз
let pik = []
let reducePik = allCarts.reduce((acc, item) =>{
    if(item.cardSuit === 'spade'){
        for (let element of item.value) {
            if(element === 'ace'){
                acc.push({cardSuit: item.cardSuit, value: element, color: item.color})
            }
        }
    }
    return acc
}, pik);
console.log(reducePik)

// - всі шістки
let newObj = []
let reduce = allCarts.reduce((acc, value) => {
    if (value.cardSuit){
        for (let element of value.value) {
            if(element === '6'){
                if(value.color){
                    acc.push({cardSuit: value.cardSuit, value: element, color: value.color})
                }
            }
        }
    }
    return acc
}, newObj);
console.log(reduce)

// - всі червоні карти
allCarts.forEach(value => {
    if(value.color === 'red'){
        console.log(value)
    }
})

// - всі буби
allCarts.forEach(value => {
    if(value.cardSuit === 'diamond'){
        console.log(value)
    }
})

// - всі трефи від 9 та більше
let mas = [];
let reduce = allCarts.reduce((acc, item) => {
    if (item.cardSuit === 'club') {
        for (let element of item.value.slice(3)) {
            acc.push({cardSuit: item.cardSuit, value: element, color: item.color})
        }
    }
    return acc
}, mas);
console.log(reduce)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduce = allCarts.reduce((acamulator, inner) => {
    if (inner.cardSuit === 'spade') {
        acamulator.spades.push(inner)
    }
    if(inner.cardSuit === 'diamond'){
        acamulator.diamonds.push(inner)
    }
    if(inner.cardSuit === 'heart'){
        acamulator.hearts.push(inner)
    }
    if(inner.cardSuit === 'club'){
        acamulator.clubs.push(inner)
    }
    return acamulator
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(reduce)

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// // --написати пошук всіх об'єктів, в який в modules є sass
coursesArray.forEach(value => {
    let modules = value.modules
    for (let element of modules) {
        if (element === 'sass') {
            console.log(value);
        }
    }
})

// --написати пошук всіх об'єктів, в який в modules є docker
coursesArray.forEach(value => {
    for (let element of value.modules) {
        if(element === 'docker'){
            console.log(value)
        }
    }
})