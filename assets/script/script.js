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
    let newLi = "";
    arrayTask.forEach((element, index) => {
        if (element.concluded == true) {
            newLi = newLi + `
            <li class="task" style="background-color:#2f2f30"><i class="uil uil-check-circle check icon-task" onclick="conclude(${index})"></i><s>${element.text}</s><i class="uil uil-trash-alt delete icon-task" onclick="deleteTask(${index})"></i></li>
            `;
        } else {
            newLi = newLi + `
            <li class="task"><i class="uil uil-check-circle check icon-task" onclick="conclude(${index})"></i>${element.text}<i class="uil uil-trash-alt delete icon-task" onclick="deleteTask(${index})"></i></li>
            `;
        }
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
    let task = arrayTask[index];
    task.concluded = true;
    arrayTask.splice(index, 1);
    arrayTask.push(task);
    showATask();
}


button.addEventListener('click', addTask);
