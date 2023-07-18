const list_task = document.querySelector(".to-do-list");
const input = document.querySelector(".input-task");
const button = document.querySelector(".button-task");

let arrayTask = [];

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

    localStorage.setItem('list', JSON.stringify(arrayTask));

    if (arrayTask.length === 0) {
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

function deleteTask(index) {
    arrayTask.splice(index, 1);
    showATask();
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

function reloadTasks() {
    let localStorageTasks = localStorage.getItem('list');
    
    if (localStorageTasks) {
        arrayTask = JSON.parse(localStorageTasks);
    }

    showATask();
}

reloadTasks();
button.addEventListener('click', addTask);
