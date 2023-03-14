let url = new URL(location.href);
let json = url.searchParams.get('data');
let post = JSON.parse(json);
console.log(post)

let divMain = document.getElementById('container');
divMain.innerHTML = `<b>User ID:</b> ${post.userId},<br>
                     <b>ID:</b> ${post.id},<br>
                     <b>Title:</b> ${post.title},<br>
                     <b>Body:</b> ${post.body}.`;

let hr = document.getElementById('hr');

let link = new URL(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
fetch(link)
    .then((value) => value.json())
    .then((comments) => {
        // console.log(comments)
        let div = document.getElementById('mainComments');
        for (let element of comments) {
            console.log(element)
            let divComment = document.createElement('div');
            divComment.classList.add('divComment');
            divComment.innerHTML = `<b>Post ID:</b> ${element.postId},<br>
                                    <b>ID:</b> ${element.id},<br>
                                    <b>Name:</b> ${element.name},<br>
                                    <b>Email:</b> ${element.email},<br>
                                    <b>Body:</b> ${element.body}.`
            div.appendChild(divComment)
        }
        document.body.append(divMain, hr, div)
    })
