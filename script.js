// Selectors

const todoInput = document.querySelector('.todo-input');
const todobtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

// EventListerner
todobtn.addEventListener('click',addtodo);
todoList.addEventListener('click',deleteCheck)

// functions
function addtodo(e) {
    // prevent
    e.preventDefault();
    //tododiv
    const todoDiv = document.createElement('div')
    todoDiv.classList.add("todo")
    // crete li
    const newtodo = document.createElement('li')
    newtodo.innerText = todoInput.value;
    newtodo.classList.add('todo-item')
    todoDiv.appendChild(newtodo)
    //Check mark button
    const completedbtn = document.createElement('button')
    completedbtn.innerHTML ='<i class="fas fa-check"></i>'
    completedbtn.classList.add('complete-btn')
    todoDiv.appendChild(completedbtn)
    //Check trash button
    const trashbtn = document.createElement('button')
    trashbtn.innerHTML ='<i class="fas fa-trash"></i>'
    trashbtn.classList.add('trash-btn')
    todoDiv.appendChild(trashbtn)

    // Append to todo list ul
    todoList.appendChild(todoDiv);

    // clear input Value
    todoInput.value=""
} 


function deleteCheck(e,todo) {
    const item = e.target;

    if (item.classList[0]==="trash-btn") {

        const todo = item.parentElement;

        todo.remove();
    
    } if (item.classList[0]==="complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("complted")
    }
}