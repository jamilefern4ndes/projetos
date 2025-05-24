function enter(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        addTask()
    }
}
let inputTask = document.querySelector('#task')
let taskArea = document.querySelector('.taskArea')

let itens = []

function addTask(){

    let newTask = document.querySelector('#task').value
    console.log ('nova tarefa: ' + newTask)
    itens.push(newTask)
    let item = document.createElement('label')
    item.setAttribute("id", "novoItem")
    item.innerHTML = 
        `<input type="checkbox" name="${newTask}"
        <p>${newTask}</p>
        <div id="delete">x</div>`
    taskArea.appendChild(item)
    inputTask.value = ''

    let deleteButton = item.querySelector('#delete')
    if (deleteButton) {
        deleteButton.addEventListener('click', () => {
            taskArea.removeChild(item)
            itens = itens.filter(task => task !== newTask)
            console.log(itens)
        })
}
}


