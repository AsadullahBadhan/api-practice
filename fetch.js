let userContainer = document.getElementById("user-container");
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => displayNames(data));

function displayNames(users) {
    const names = users.map((user) => user.name);
    names.map((name) => {
        const li = document.createElement("li");
        li.innerText = name;
        userContainer.appendChild(li);
    });
}