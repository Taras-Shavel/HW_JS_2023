// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form = document.MainForm;
form.addEventListener('submit', function (eo) {
    eo.preventDefault();

    let div = document.createElement('div');
    let h1Name = document.createElement('h1');
    let h1SurName = document.createElement('h1');
    let h1Age = document.createElement('h1');

    h1Name.innerText = `Name: ${this.userName.value}`;
    h1SurName.innerText = `Surname: ${this.surName.value}`;
    h1Age.innerText = `Age: ${this.age.value}`;

    div.append(h1Name, h1SurName, h1Age);
    document.body.appendChild(div);
})