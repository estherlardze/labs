let allTodos = [
  {
    title: "Research E-commerce Market Trends",
    description:
      "Research current trends and growth opportunities in the beauty e-commerce sector",
      date: "2024-01-10T17:26",
    completionStatus: false,
  },
  {
    title: "Finalize Presentation on ASPIRE Project",
    description:
      "Complete the video presentation, ensuring it highlights the LMS, AI chatbot, mentorship management",
      date: "2024-11-10T17:26",
    completionStatus: false,
  },
];

const addTodoButton = document.querySelector(".add-task");
const taskOverlay = document.querySelector(".task-overlay");
const close = document.querySelector(".close");

const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const dateInput = document.querySelector("#date");
const addBtn = document.querySelector(".add-btn");

let editTodoIndex = null;

window.addEventListener("DOMContentLoaded", loadTodos);


//function to add a todo to the todos array
function addTodo() {
  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();
  const date = dateInput.value.trim();

  const todo = { title, description, date, completionStatus: false };

  if (title && date && description) {
    if(editTodoIndex !== null) {
      allTodos[editTodoIndex] = todo;
      editTodoIndex = null;
    } else{
      allTodos.push(todo);
    }
    saveTdos();
    document.querySelector("#container").innerHTML = "";
    allTodos.forEach((todo) => displayTodo(todo));
    taskOverlay.classList.add("hidden");
  } 
  else {
    alert("Please fill in all fields");
  }

  titleInput.value = "";
  descriptionInput.value = "";
  dateInput.value = "";
}

// function to disply the todo on the page
function displayTodo(todo) {
  const div = document.createElement("div");
  div.classList.add("todo-item");

  const dateTime = new Date(todo.date);
  const date = dateTime.toISOString().split("T")[0];
  const time = dateTime.toISOString().split("T")[1].slice(0, 5);

  div.innerHTML = `
     <article class="todo-header">
        <h4>${todo.title}</h4>
        <div class="todo-icons">
            <img src="./delete.svg" alt="delete icon" class="icon delete">
            <img src="./edit.svg" alt="edit icon" class="icon edit">
            <input type="checkbox" name="" id="checkbox" class="checkbox">
        </div>
        </article>
        <p class="todo-description">${todo.description}</p>
        
        <div class="todo-date">
        <p class="">${date}</p>
        <p class="todo-time">${time}</p>
        </div>
        
    </article>`;

  const deleteIcon = div.querySelector(".delete");
  const editIcon = div.querySelector(".edit");
  const checkbox = div.querySelector(".checkbox");

  let index = allTodos.indexOf(todo);

  checkbox.addEventListener("change", () => {
    todo.completionStatus = checkbox.checked;
    console.log(todo);
    div.classList.toggle('completed')
    saveTdos();
  })

 
  deleteIcon.addEventListener("click", () => {
    allTodos.splice(index, 1);
    div.remove();
    saveTdos();
  });

  editIcon.addEventListener("click", () => {
    taskOverlay.classList.remove("hidden");
    titleInput.value = todo.title;
    descriptionInput.value = todo.description;
    dateInput.value = todo.date;

    editTodoIndex = allTodos.indexOf(todo);
  });

  document.querySelector("#container").appendChild(div);
}

// function to sort tasks in ascending and descending order

const asceding = document.querySelector(".ascending")
const descending = document.querySelector(".descending")
const completed = document.querySelector(".showcompleted")

asceding.addEventListener("click", () => {
  allTodos.sort((a, b) => new Date(a.date) - new Date(b.date));
  document.querySelector("#container").innerHTML = "";
  allTodos.forEach((todo) => displayTodo(todo));
  asceding.style.backgroundColor = "#035807";
  descending.style.backgroundColor = "#03580780";
  completed.style.backgroundColor = "#03580780";
})

descending.addEventListener("click", () => {
  allTodos.sort((a, b) => new Date(b.date) - new Date(a.date));
  document.querySelector("#container").innerHTML = "";
  allTodos.forEach((todo) => displayTodo(todo));
  asceding.style.backgroundColor = "#03580780";
  descending.style.backgroundColor = "#035807";
  completed.style.backgroundColor = "#03580780";
})

completed.addEventListener("click", () => {
  const completedTodos = allTodos.filter((todo) => todo.completionStatus === true);
  document.querySelector("#container").innerHTML = "";
  if(completedTodos.length > 0) {
    completedTodos.forEach((todo) => displayTodo(todo));
  } else {
      return "No completed tasks ";
  }
  asceding.style.backgroundColor = "#03580780";
  descending.style.backgroundColor = "#03580780";
  completed.style.backgroundColor = "#035807";
})

// event listeners
addTodoButton.addEventListener("click", () => {
  taskOverlay.classList.remove("hidden");
});

close.addEventListener("click", () => {
  taskOverlay.classList.add("hidden");
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addTodo();
});

// save items to local storage
function saveTdos(){
  localStorage.setItem("todos", JSON.stringify(allTodos));
}

// load items from local storage
function loadTodos(){
  const storedTodos = JSON.parse(localStorage.getItem("todos"));

  if(storedTodos) {
    allTodos = storedTodos;
    allTodos.forEach((todo) => displayTodo(todo));
  }
}

