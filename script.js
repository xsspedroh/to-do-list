const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const allList = document.querySelector('.task-list')

let myList = []

function addNewTask() {
    if (input.value !== ''){
    myList.push({
        task: input.value,
        done: false
    })
    input.value = ''
    showTasks()
    }
}

function showTasks() {

    let newLi = ''

    myList.forEach((i, index) => {
        newLi = newLi + `

        <li class="task ${i.done && "done"}">
          <img src="./assets/checked.png" alt="check-task" onclick="doneTask(${index})">
         <p>${i.task}</p>
            <img src="./assets/trash.png" alt="trash-task" onclick="itemDelete(${index})">
        </li>

        `
    })

    allList.innerHTML = newLi

    localStorage.setItem('list', JSON.stringify(myList))
}

function doneTask(index) {
    myList[index].done = !myList[index].done
    showTasks()
}

function itemDelete(index) {
    myList.splice(index, 1)
    showTasks()
}

function reloadList() {
    const localStorageTasks = localStorage.getItem('list')
    if (localStorageTasks) {
        myList = JSON.parse(localStorageTasks)
        showTasks()
    }
}

reloadList()
button.addEventListener('click', addNewTask)