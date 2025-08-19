const tasksInput = document.querySelector('.task-input')
const tasks = document.querySelector('.tasks')
const btnAddTask = document.querySelector('.btn-add-task')

function createLi(){
  const li = document.createElement('li')
  return li
}

function createTask(textoInput){
  const li = createLi()
  li.innerHTML = textoInput
  tasks.appendChild(li)
  clearInput()
  createEraseButton(li)
  persistTasks()
}

function clearInput(){
  tasksInput.value = ''
  tasksInput.focus()
}

function createEraseButton(li){
  li.innerHTML += ' ' 
  const eraseBtn = document.createElement('button')
  eraseBtn.innerText = 'Apagar'
  eraseBtn.setAttribute('class', 'btn-erase')// Ou eraseBtn.classList.add('btn-erase')
  eraseBtn.setAttribute('title', 'Apagar essa tarefa')
  li.appendChild(eraseBtn)
}

function persistTasks(){
  const liTasks = tasks.querySelectorAll('li')
  const tasksList = []
  for (let task of liTasks){
    let taskText = task.innerText
    taskText = taskText.replace('Apagar', '').trim()
    tasksList.push(taskText)
  }
  const tasksJSON = JSON.stringify(tasksList) //Transforma o array em JSON em string
  localStorage.setItem('tasks', tasksJSON)// Armazena a string no localStorage
}

function loadTasks(){
  const tasks = localStorage.getItem('tasks') // Pega a string armazenada no localStorage
  const tasksList = JSON.parse(tasks) // Transforma a string em um array
  for (let task of tasksList){
    createTask(task)
  }
}

tasksInput.addEventListener('keypress', (e) =>{
  // console.log(e)
  if(e.key === 'Enter'){
    if(!tasksInput.value) return
    createTask(tasksInput.value)
  }
})

btnAddTask.addEventListener('click', (e) =>
{
  if(!tasksInput.value) return
  createTask(tasksInput.value)
})

document.addEventListener('click', (e) => { // Função para quando clicarmos no botão de apagar, ele remover o pai relacionado ao botão, no caso o <li>
  const el = e.target
  if(el.classList.contains('btn-erase')){
    el.parentElement.remove()
    persistTasks()
  }
})
loadTasks()

