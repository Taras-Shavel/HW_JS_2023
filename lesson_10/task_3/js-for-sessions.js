let json = localStorage.getItem('sessions');
let sessions = json ? JSON.parse(json) : [];

let history = document.createElement('div')
let container = document.createElement('div');
let title = document.createElement('h1');
history.classList.add('classHistory');
container.classList.add('classContainer');
title.innerHTML = '<u>History Index.html</u>'
history.append(title)
container.append(history)

for (let session of sessions) {
    let divContainer = document.createElement('div');
    let h1Date = document.createElement('h1');
    let h1Time = document.createElement('h1');

    divContainer.classList.add('container', 'element');
    let dateObj = format(session.date);

    h1Date.innerText = `Date: ${dateObj.DAYS}/${dateObj.MONTHS}/${dateObj.YEARS}`;
    h1Time.innerText = `Time: ${dateObj.HOURS}.${dateObj.MINUTES}.${dateObj.SECONDS}`;

    divContainer.append(h1Date, h1Time);
    container.append(divContainer);
    document.body.appendChild(container)
}
function format(date) {
    let newDate = new Date(date)

    let YEARS = newDate.getFullYear().toString();
    let MONTHS = (newDate.getMonth() + 1).toString();
    let DAYS = newDate.getDate().toString();
    let HOURS = newDate.getHours().toString();
    let MINUTES = newDate.getMinutes().toString();
    let SECONDS = newDate.getSeconds().toString();

    return {
        YEARS: YEARS,
        MONTHS: MONTHS.length < 2 ? `0${MONTHS}` : MONTHS,
        DAYS: DAYS.length < 2 ? `0${DAYS}` : DAYS,
        HOURS: HOURS.length < 2 ? `0${HOURS}` : HOURS,
        MINUTES: MINUTES.length < 2 ? `0${MINUTES}` : MINUTES,
        SECONDS: SECONDS.length < 2 ? `0${SECONDS}` : SECONDS,
    }
}