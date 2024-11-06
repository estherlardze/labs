const add = document.querySelector(".add");
const todoForm = document.querySelector(".todo-form")
const container = document.querySelector("#todo-container");


let allTodos = [];

todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    createTodo();
})


// function to create a new todo
function createTodo() {
  const title = document.querySelector(".title").value;
  const description = document.querySelector(".description").value;
  const date = document.querySelector("#date").value;

  const todo = { title, description, date,};
  if(title && description){
    allTodos.push(todo);
    addTodo(todo)
    title = "";
    description = "";
    date = "";
  }
}

function addTodo(todo) {
const div = document.createElement("div");
div.innerHTML = `<div class="todo-item">
                    <article class="todo-header">
                    <h4>${todo.title}</h4>
                    <div class="todo-icons">
                        <img src="./delete.svg" alt="delete icon" class="icon delete">
                        <img src="./edit.svg" alt="edit icon" class="icon edit">
                        <input type="checkbox" name="" id="">
                    </article>
                    <p class="todo-description">${todo.description}</p>
                    
                    <div class="todo-date">
                    <p class="">${todo.date}</p>
                    <p class="todo-time">2:00 pm</p>
                    </div>
                    </div>`;
container.appendChild(div);
      
}

add.addEventListener("click", createTodo);
