let url = new URL('https://jsonplaceholder.typicode.com/users')
fetch(url)
.then(value => value.json())
.then(usersArray => {
    console.log(usersArray)
    for (let user of usersArray) {
        let div = document.createElement('div');
        div.classList.add('divBlock');

        let h1ID = document.createElement('h1');
        h1ID.classList.add('h1ID');

        let h1Name = document.createElement('h1');
        h1Name.classList.add('h1Name');

        h1ID.innerText = `ID: ${user.id}`;
        h1Name.innerText = `Name: ${user.name}`;

        let button = document.createElement('button');
        button.classList.add('button');
        button.innerText = 'Send'
        button.addEventListener('click', function () {
            document.location.href = 'user-details.html?data=' + JSON.stringify(user);
        })
        button.addEventListener('mouseover', () =>{
            button.style.background = '#ff0000';
            button.style.color = 'white';
        })
        button.addEventListener('mouseout', () => {
            button.style.background = '';
            button.style.color = '';
        })

        div.append(h1ID, h1Name, button)
        document.body.appendChild(div)
    }


})