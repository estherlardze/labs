const button = document.querySelector("#button");


const Person = {
    name: "Alice",
    age: "20",
    greet() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
    },
  };
  
  Person.greet() // will output "Hello, my name is Alice and I'm 20 years old."

  Person.greet.call({ name: "Priscilla", age: 30 }); // Output: "Hello, my name is Priscilla and I'm 30 years old."
  
  Person.greet.apply({ name: "Ella", age: 22 }); // "Hello, my name is Ella and I'm 22 years old."
  
  // experiment with bind, bind creates a new function and call it later
  const newPerson = Person.greet.bind({ name: "Ruth", age:24 });
  newPerson(); // this will log "Hello, my name is Ruth and I'm 24 years old."


// the arrow function inherits (this keyword) from its surrounding scope, (this) 
// inside the arrow function does not refer to the button element that triggered 
// the event. Instead, it refers to whatever this was in the scope where button.addEventListener(...) 
// was defined, which is often undefined in strict mode or refers to the window object in non-strict mode

button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(this.id);
    console.log(this.textContent);
  });


// this will print out the id and the text content of the button
// When a regular function is used as an event listener, JavaScript automatically sets this to the element that triggered the event. In this case, this is set to the button element.
function handleClick() {
  console.log(this)  // logs the button element
  console.log(this.id); // logs the id button
  console.log(this.textContent); // logs click me!
}

// 3
function createCounter() {
  let count = 0;

  const countObj = {
    increment() {
      count++;
      console.log(this.count); // this line returns undefined because this does not have access to the count variable
    },

    getCount() {
      return count;
    },
  };

  return countObj;
}
const newCounter = createCounter();
console.log("count", createCounter().getCount());


// 4

function reateTimer(duration, elementId){
  let remainingTime = duration  

  function updateTimer() {
    if(remainingTime > 0){
      this.textContent = `Time Remaining: ${remainingTime} seconds`;
      remainingTime--
    }
    else{
      clearInterval(timer)
      this.textContent = "Time up"
    }
  }

  const element = document.getElementById("elementId")
  const boundedElement = updateTimer.bind(element)

   const timer = setInterval(boundedElement, 1000)
   return timer
  }



console.log(reateTimer(10, "Much Time"))











