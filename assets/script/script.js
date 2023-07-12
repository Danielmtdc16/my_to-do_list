const list_task = document.querySelector(".to-do-list");
const input = document.querySelector(".input-task");
const button = document.querySelector(".button-task");

const arrayTask = [];

function addTask() {
    if (input.value == "") alert("Adicione um texto!");
    else {
        arrayTask.push(input.value);
        showATask();
    }
}

function showATask() {
    let newLi = "";
    arrayTask.forEach((element, index) => {
        newLi = newLi + `
        <li class="task"><i class="uil uil-check-circle check icon-task"></i>${element}<i class="uil uil-trash-alt delete icon-task" onclick="deleteTask(${index})"></i></li>
        `;
    });
    list_task.innerHTML = newLi;
}

function deleteTask(index) {
    arrayTask.splice(index, 1);
    
    showATask();
}

button.addEventListener('click', addTask);
