let loadButton = document.querySelector("#loadButton");
let list = document.querySelector("#usersList");

loadButton.addEventListener("click", function(){
    loadUsers();
});

async function loadUsers() {
    let response = await fetch("https://www.acme-api.com/api/users");
    let data = await response.json();
    let users = data.users;
    for(let i = 0; i < users.length; i++) {
        let user = users[i];
        let li = document.createElement("li");
        li.innerText = user.fullName;
        list.appendChild(li);
    }
}