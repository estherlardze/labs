const button = document.querySelector("#button");

// experimenting the this keyword with objects
const Person = {
    name: "Esther",
    age: "12",
    greet() {
      console.log(`Hello, 
  my name is ${this.name} and I'm ${this.age} years old`);
    },
  };
  
  // experiment with call
  Person.greet.call({ name: "Priscilla", age: 30 });
  
  // experiment with apply
  Person.greet.apply({ name: "Ella", age: 22 }); // prints message with name and age as ella, 18
  
  // experiment with bind, bind creates a new function and call it later
  const newPerson = Person.greet.bind({ name: "Alice", age: 60 });
  newPerson();


// since the arrow function inherits this from its surrounding scope, this 
// inside the arrow function does not refer to the button element that triggered 
// the event. Instead, it refers to whatever this was in the scope where button.addEventListener(...) 
// was defined, which is often undefined in strict mode or refers to the window object in non-strict mode

button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(this);
    console.log(this.textContent);
  });


// this will print out the id and the text content of the button
// When a regular function is used as an event listener, JavaScript automatically sets this to the element that triggered the event. In this case, this is set to the button element.
function handleClick() {
  e.preventDefault();
  console.log(this.id);
  console.log(this.textContent);
}

function createCounter() {
  let count = 0;

  const countObj = {
    increment() {
      count++;
      console.log(this.count);
    },

    getCount() {
      return count;
    },
  };

  return countObj;
}

console.log("count", createCounter());


function reateTimer(duration, elementId){
    
    const timerId =  setInterval(() => {
       duration -- 
       if(duration === 0){
         console.log("Time is up!")
         clearInterval(timerId);
       }else{
         elementId.textContent = duration;
         console.log(`${duration} time remaining`)
       }
    }, 1000)

    return timerId;
}
console.log(reateTimer(20, "Much time left"));






