const titleInput = document.querySelector(".title")
const descriptionInput = document.querySelector(".description")
const dateInput = document.querySelector("#date")
const todoForm = document.querySelector(".form")
const add = document.querySelector(".submit");
const container = document.querySelector("#todo-container");

const check = document.querySelector(".checkbox");


let allTodos = [];

todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    createTodo();
})


// function to create a new todo
function createTodo() {
  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();
  const date = dateInput.value;

  let todo = { title, description, date};

  if(title && date){
    allTodos.push(todo);
    console.log(allTodos);
    addTodo(todo)

    titleInput.value = "";
    descriptionInput.value = "";
    dateInput.value = "";
  }

  saveTodos();
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
                    <p class="todo-description">${todo.description || ""}</p>
                    
                    <div class="todo-date">
                    <p class="">${todo.date}</p>
                    <p class="todo-time">2:00 pm</p>
                    </div>
                    </div>`;
container.appendChild(div);     
}

// mark todo as done


  check.addEventListener("click", function(event) {
    const checkbox = event.target;
    const todoItem = checkbox.closest(".todo-item");
    const todo = allTodos.find(todo => todoItem.dataset.id === todo.title);
    todo.completed = checkbox.checked;
    console.log(todo);
  });

  container.addEventListener("click", function(event) {
    const target = event.target;
    const todoItem = target.closest(".todo-item");
    const todo = allTodos.find(todo => todoItem.dataset.id === todo.title);
    if (target.classList.contains("delete")) {
      allTodos = allTodos.filter(todo => todo.title !== todo.title);
      todoItem.remove();
    } else if (target.classList.contains("edit")) {
      titleInput.value = todo.title;
      descriptionInput.value = todo.description;
      dateInput.value = todo.date;
      allTodos = allTodos.filter(todo => todo.title !== todo.title);
      todoItem.remove();
    }
    saveTodos();
  });

  // save todo

  function saveTodos(){
    localStorage.setItem("todos", container.innerHTML);
  }

  // load todos

  function loadTodos(){
    container.innerHTML = localStorage.getItem("todos");
   
  }

  loadTodos()

