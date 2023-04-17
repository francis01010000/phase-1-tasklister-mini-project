document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners()
});

let taskArr = []

function addingEventListeners(){
  document
    .getElementById('create-task-form')
    .addEventListener("submit", handleFormSubmit);
  document.getElementById("sort-tasks").addEventListener("change", sortTasks)
}

function handleFormSubmit(e){
  e.preventDefault();
  console.log(e)
  const task = e.target[0].value;
  const priorityLevel = parseInt(e.target.priority.value);
  const taskObj = {task, priorityLevel}
  taskArr.push(taskObj)
  console.log(taskArr);
  sortTasks()
  buildTasks()
}

function buildTasks(){
  const addTask = document.querySelector("#tasks")
  addTask.innerHTML = ""
  taskArr.forEach((task) => {
    let li = document.createElement('li');
    let btn = document.createElement('button');
    btn.textContent = 'X';
    btn.addEventListener('click', (e) => deletor(e, task));
    li.textContent = task.task + " ";
    li.style.color = getPriorityColor(task.priorityLevel)
    li.appendChild(btn);
    addTask.appendChild(li);
  }) 
}

function deletor(e, task){
  console.log(e)
  taskArr = taskArr.filter((el) => el.task !== task.task)
  e.target.parentNode.remove();
}

function getPriorityColor(priorityLevel){
  if (priorityLevel === 1) {
    return "red"
  } else if(priorityLevel === 2){
    return "blue"
  }else {
    return "green"
  }
}

function sortTasks(){
  const sortTasksSelect = document.getElementById('sort-tasks');
  if(sortTasksSelect.value === 'HL'){
    taskArr.sort((a, b) => a.priorityLevel - b.priorityLevel);
  }else {
    taskArr.sort((a, b) => b.priorityLevel - a.priorityLevel);
  }
  console.log(taskArr);
  buildTasks();
}



