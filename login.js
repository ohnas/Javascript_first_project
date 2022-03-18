const loginForm = document.querySelector("#login");
const loginInput = document.querySelector("#login input");
const welcomeText = document.querySelector("#welcom");
const savedUser = localStorage.getItem("username");

function userLogin(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username", username);
    loginForm.classList.add("hidden");
    welcomeText.innerHTML = `Welcome ${username}`;
    welcomeText.classList.remove("hidden");
}

function isUser(){
    if(savedUser === null){
        loginForm.addEventListener("submit", userLogin);
    } else {
        loginForm.classList.add("hidden");
        welcomeText.innerHTML = `Welcome ${savedUser}`;
        welcomeText.classList.remove("hidden");
    }
}

isUser();
