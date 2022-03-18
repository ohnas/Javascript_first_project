const listForm = document.querySelector("#list");
const listInput = document.querySelector("#list input");
const ul = document.querySelector("#todo");


let toDos = [];

function saveList(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function delList(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveList();
}

function showList(item){
    const li = document.createElement("li");
    li.id = item.id;
    const span = document.createElement("span");
    span.innerText = item.text;
    const btn = document.createElement("button");
    btn.innerText = "del";
    btn.addEventListener("click", delList)
    li.appendChild(span);
    li.appendChild(btn);
    ul.appendChild(li);
}

function handleList(event){
    event.preventDefault();
    const todoList = {
        text : listInput.value,
        id : Date.now(),
    };
    listInput.value = "";
    toDos.push(todoList)
    saveList();
    showList(todoList);
}

listForm.addEventListener("submit", handleList);

const savedList = localStorage.getItem("todos");

if(savedList !== null){
    const parseList = JSON.parse(savedList);
    toDos = parseList;
    parseList.forEach(showList);
}
