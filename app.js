const container = document.getElementById('container')
const textField = document.getElementById('textField');
const button = document.getElementById('create_Button');

button.addEventListener('click', addTask);
textField.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter'){
    addTask();
  }
})

function addTask() {
  if(textField.value === '') return alert("There's no task");
  
  let task = document.createElement("div");
  task.classList.add('element_Container');

  let title = document.createElement('h2');
  title.classList.add('name_Element');
  title.innerText = textField.value;
  textField.value = '';

  let button_Container = document.createElement('div');
  button_Container.classList.add('button_Container');

  let check_Element = document.createElement('input');
  check_Element.classList.add('check_Element');
  check_Element.type = 'checkbox';
  check_Element.addEventListener('click', finishTask);

  let delete_Element = document.createElement('button');
  delete_Element.classList.add('delete_Element', 'bi', 'bi-trash-fill');
  delete_Element.addEventListener('click', deleteTask);

  task.appendChild(title);
  button_Container.appendChild(check_Element);
  button_Container.appendChild(delete_Element);
  task.appendChild(button_Container);

  container.appendChild(task);
}

function deleteTask(e) {
  e.target.parentNode.parentNode.remove();
}

function finishTask(e) {
  e.target.parentNode.parentNode.classList.toggle('finished');
}