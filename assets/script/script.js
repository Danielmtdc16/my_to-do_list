const list_task = document.querySelector(".to-do-list");
const input = document.querySelector(".input-task");
const button = document.querySelector(".button-task");

const arrayTask = [];

if (arrayTask.length == 0) {
    list_task.innerHTML = `
        <div class="no-chores">
            <i class="uil uil-clipboard-notes icon-no-chores"></i>
            <p class="text-no-chores">
                Sem tarefas :/
            </p>
        </div>
    `;
}

function addTask() {
    let task = {
        text: input.value,
        concluded: false
    }
    if (task.text == "") alert("Adicione um texto!");
    else {
        arrayTask.push(task);
        showATask();
        input.value = "";
    }
}

function showATask() {
    organize();
    let newLi = "";
    arrayTask.forEach((element, index) => {
        newLi = newLi + `
        <li class="task ${element.concluded && "concluded"}"><i class="uil uil-check-circle check icon-task" onclick="conclude(${index})"></i><p>${element.text}</p><i class="uil uil-trash-alt delete icon-task" onclick="deleteTask(${index})"></i></li>
        `;
    });
    list_task.innerHTML = newLi;
}

function deleteTask(index) {
    arrayTask.splice(index, 1);
    showATask();
    if (arrayTask.length == 0) {
        list_task.innerHTML = `
            <div class="no-chores">
                <i class="uil uil-clipboard-notes icon-no-chores"></i>
                <p class="text-no-chores">
                    Sem tarefas :/
                </p>
            </div>
        `;
    }
}

function conclude(index) {
    arrayTask[index].concluded = !arrayTask[index].concluded;
    showATask();
}

function organize() {
    for (i = 0; i < arrayTask.length; i++) {
        arrayTask.forEach((element, index) => {
            if (element.concluded == true) {
                let task = element;
                arrayTask.splice(index, 1);
                arrayTask.push(task);
            }
        })
    }
}

button.addEventListener('click', addTask);
