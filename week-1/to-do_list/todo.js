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

  let todo = { title, description, date, completed: false };

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

// load todos
function addTodo(todo) {
const div = document.createElement("div");
div.classList.add("todo-item");
div.innerHTML = `  <article class="todo-header">
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
                    </div>`;
container.appendChild(div);     
}




// update todo

container.addEventListener("click", function(event) {
  const target = event.target;

  if (target.classList.contains("delete")) {
    const todo = target.closest(".todo-item"); 
    if (todo) {
      todo.remove(); 
    }
  } 
  else if (target.classList.contains("edit")) {
    const todo = target.closest(".todo-item");
    
    if (todo) {
      const todoTitle = todo.querySelector("h4");
      const todoDescription = todo.querySelector(".todo-description");
      const todoDate = todo.querySelector(".todo-date");

      if (todoTitle && todoDescription && todoDate) {
        titleInput.value = todoTitle.innerText;
        descriptionInput.value = todoDescription.innerText || ""; 
        dateInput.value = todoDate.innerText;
      } else {
        console.error("Some elements are missing in the todo item.");
      }
    }
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

