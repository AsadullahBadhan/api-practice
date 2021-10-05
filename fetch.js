let userContainer = document.getElementById("user-container");
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
        let first10 = data.slice(30, 35);
        displayPosts(first10);
    });

function displayNames(users) {
    const names = users.map((user) => user.name);
    names.map((name) => {
        const li = document.createElement("li");
        li.innerText = name;
        userContainer.appendChild(li);
    });
}

function displayPosts(userPost) {
    const posts = userPost.map((post) => post.body);
    posts.map((post) => {
        const li = document.createElement("li");
        li.innerText = post;
        userContainer.appendChild(li);
    });
}