document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form')
  form.addEventListener("submit", handleFormSubmit);
});

function handleFormSubmit(e){
  e.preventDefault();
  console.log(e)
  const task = e.target[0].value;
  const priorityLevel = parseInt(e.target.priority.value);
  buildTask(task, priorityLevel)
}

function buildTask(task, priorityLevel){
  addtask = document.querySelector("#tasks")
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', deletor);
  btn.textContent = 'X';
  li.textContent = `${task} `;
  li.style.color = getPriorityColor(priorityLevel)
  li.appendChild(btn);
  addtask.appendChild(li); 
}

function deletor(e){
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

const div = document.querySelector('div');
div.style.backgroundColor = 'green';
const myTodo = document.getElementById('list');
myTodo.style.backgroundColor = 'yellow';

