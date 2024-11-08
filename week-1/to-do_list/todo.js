const titleInput = document.querySelector(".title")
const descriptionInput = document.querySelector(".description")
const dateInput = document.querySelector("#date")
const todoForm = document.querySelector(".form")
const add = document.querySelector(".submit");
const container = document.querySelector("#todo-container");

const check = document.querySelector(".checkbox");
const ascendButton = document.querySelector(".ascending")
const descButton = document.querySelector(".descending")


let allTodos =  JSON.parse(localStorage.getItem("todos")) || [];

document.addEventListener("DOMContentLoaded", loadContent);

todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    createTodo();
    saveTodos()
})


// function to create a new todo
function createTodo() {
  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();
  const date = dateInput.value;

  let todo = { title, description, date, completed: false };

  if(title && date){
    allTodos.push(todo);
    addTodo(todo)

    titleInput.value = "";
    descriptionInput.value = "";
    dateInput.value = "";
  }

  saveTodos();
}

function loadContent() {
  
  if(allTodos.length > 0) {
  allTodos.forEach((todo)=>{
    addTodo(todo)
  })
}
}

// load todos
function addTodo(todo) {
  console.log("todo")
const div = document.createElement("div");
const dateTime = new Date(todo.date);
const date = dateTime.toISOString().split("T")[0];
const time  = dateTime.toISOString().split("T")[1].slice(0, 5);

div.classList.add("todo-item");
div.innerHTML = `  <article class="todo-header">
                    <h4>${todo.title}</h4>
                    <div class="todo-icons">
                        <img src="./delete.svg" alt="delete icon" class="icon delete">
                        <img src="./edit.svg" alt="edit icon" class="icon edit">
                        <input type="checkbox" name="" id="checkbox" class="checkbox">
                    </article>
                    <p class="todo-description">${todo.description || ""}</p>
                    
                    <div class="todo-date">
                    <p class="">${date}</p>
                    <p class="todo-time">${time}</p>
                    </div>`;
container.appendChild(div);     
}


// update todo and delete todo list

container.addEventListener("click", function(event) {
  const target = event.target;

  if (target.classList.contains("delete")) {
    const todo = target.closest(".todo-item"); 
    if (todo) {
      todo.remove(); 
    }
  } 
  else if(target.classList.contains("checkbox")) {
      const todo = target.closest(".todo-item");
      if (todo) {
        todo.classList.toggle("completed");
      }
     saveTodos(); 
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
    saveTodos()

  }
  
});


// sort todos based on date

ascendButton.addEventListener("click", function() {
  allTodos.sort((a, b) => new Date(a.date) - new Date(b.date));
  container.innerHTML = "";
  allTodos.forEach(addTodo);
});

descButton.addEventListener("click", function() {
  allTodos.sort((a, b) => new Date(b.date) - new Date(a.date));
  container.innerHTML = ""; 
  allTodos.forEach(addTodo);
});

  // save todo
  function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }

  

