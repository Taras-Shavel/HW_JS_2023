let url = new URL(location.href);
let json = url.searchParams.get('data');
let user = JSON.parse(json);
console.log(user);

let container = document.getElementById('container');
let divUser = document.getElementById('divUser')
divUser.innerHTML = `<u><b>USER:</b></u><br>
                     <b>ID:</b> ${user.id},<br>
                     <b>Name:</b> ${user.name},<br>
                     <b>UserName:</b> ${user.username},<br>
                     <b>Email:</b> ${user.email},`

let divAddress = document.getElementById('divAddress');
divAddress.innerHTML = `<u><b>ADDRESS</b></u><br>
                     <b>Street:</b> ${user.address.street},<br>
                     <b>Suite:</b> ${user.address.suite},<br>
                     <b>City:</b> ${user.address.city},<br>
                     <b>ZipCode:</b> ${user.address.zipcode}`;

let divGeo = document.getElementById('divGeo');
divGeo.innerHTML = `<u><b>GEO</b></u><br>
                    <b>lat:</b> ${user.address.geo.lat},<br>
                    <b>lng</b>: ${user.address.geo.lng}`;

let divUserContact = document.getElementById('divUserContact')
divUserContact.innerHTML = `<b>Phone:</b> ${user.phone},<br>
                            <b>WebSite:</b> ${user.website},`;

let divCompany = document.getElementById('divCompany');
divCompany.innerHTML = `<u><b>COMPANY</b></u><br>
                     <b>NameCompany:</b> ${user.company.name},<br>
                     <b>CatchPhrase:</b> ${user.company.catchPhrase},<br>
                     <b>Business slang:</b> ${user.company.bs}.`;

let button = document.createElement('button');
button.classList.add('button'); //class button
button.innerText = 'post of current user';

button.addEventListener('mouseover',() => {
    button.style.background = '#fff457'
})
button.addEventListener('mouseout',() => {
    button.style.background = ''
})

container.append(divUser, divAddress, divGeo, divUserContact, divCompany)
document.body.append(container, button)

button.addEventListener('click', function () {
    let url = new URL(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    fetch(url)
        .then((value) => value.json())
        .then((post) => {
            let divUserId = document.createElement('div');
            let h1Title = document.createElement('h1')

            divUserId.classList.add('divUserId'); // class divUserId
            h1Title.innerText = `Title all Posts ID: ${user.id}`
            divUserId.appendChild(h1Title)

            for (let postElement of post) {
                let divList = document.createElement('div');
                divList.classList.add('divList');
                divList.innerText = `${postElement.title}`;

                let buttonPost = document.createElement('button');
                buttonPost.classList.add('buttonPost');
                buttonPost.innerText = 'Save info'

                buttonPost.addEventListener('click', () => {
                    document.location.href = 'post-details.html?data=' +
                        JSON.stringify(postElement);
                })
                buttonPost.addEventListener('mouseover',() => {
                    buttonPost.style.background = 'peachpuff'
                })
                buttonPost.addEventListener('mouseout',() => {
                    buttonPost.style.background = ''
                })

                divList.append(buttonPost);
                divUserId.appendChild(divList);

                document.body.appendChild(divUserId)

            }
        })
})


