const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

//function for adding task 
addTask = ()=>{
    const taskText = taskInput.value.trim()
    if(taskText === '') return;
    // create task
    const li = document.createElement('li');
    li.className = 'task';
    li.innerHTML = `<input type="checkbox" class="complete"><span>${taskText}</span> <button class="delete">Delete</button>`;
    

    //append to the list
    taskList.appendChild(li)
    taskInput.value = '';
}
// adding the tasks
  addBtn.addEventListener('click',addTask);
  taskInput.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter') addTask();

  })


  // completing and deleting task
  taskList.addEventListener('click',(e)=>{
    const target = e.target;
    
    // toggle completed state
    if(target.className === 'complete'){
      const taskItem = target.parentElement;
      taskItem.classList.toggle('completed');
    }

    // delete task
    if (target.className === 'delete'){
      target.parentElement.remove();
    }
  })



