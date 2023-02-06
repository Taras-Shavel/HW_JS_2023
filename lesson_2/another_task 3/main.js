// Завдання:
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//    за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання.
//   У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
//
// Відповіді:

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//    за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x = undefined;
const y = x || "default";
console.log(y)

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання.
//   У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0].monthDuration > 5){
    console.log('Super')
}else if(coursesAndDurationArray[0].monthDuration < 5){             //JavaScript Complex
    console.log('Bad')
}else if (coursesAndDurationArray[0].monthDuration === 5){
    console.log('Normally')
}

if(coursesAndDurationArray[1].monthDuration > 5){
    console.log('Super')
}else if(coursesAndDurationArray[1].monthDuration < 5){             // Java Complex
    console.log('Bad')
}else if (coursesAndDurationArray[1].monthDuration === 5){
    console.log('Normally')
}

if(coursesAndDurationArray[2].monthDuration > 5){
    console.log('Super')
}else if(coursesAndDurationArray[2].monthDuration < 5){            // Python Complex
    console.log('Bad')
}else if (coursesAndDurationArray[2].monthDuration === 5){
    console.log('Normally')
}

if(coursesAndDurationArray[3].monthDuration > 5){
    console.log('Super')
}else if(coursesAndDurationArray[3].monthDuration < 5){             // QA Complex
    console.log('Bad')
}else if (coursesAndDurationArray[3].monthDuration === 5){
    console.log('Normally')
}
if(coursesAndDurationArray[4].monthDuration > 5){
    console.log('Super')
}else if(coursesAndDurationArray[4].monthDuration < 5){             //FullStack
    console.log('Bad')
}else if (coursesAndDurationArray[4].monthDuration === 5){
    console.log('Normally')
}

if(coursesAndDurationArray[5].monthDuration > 5){
    console.log('Super')
}else if(coursesAndDurationArray[5].monthDuration < 5){             //FrontEnd
    console.log('Bad')
}else if (coursesAndDurationArray[5].monthDuration === 5){
    console.log('Normally')
}