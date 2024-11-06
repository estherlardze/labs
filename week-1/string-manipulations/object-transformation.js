// function to return full name
const fullName = (person) => {
    const fullname = `${person.firstName} ${person.lastName}`
    const age = person.age 
    
    if(age === 18){
      console.log("you are 18")
    }
    else if (age > 18){
      console.log("you are older");
    }
    else{
      console.log("Enter 18 or above ")
    }
    
    return fullname  
    }
  
  
  // function to Filters
  const filterByAge = (person, minAge) => {
     const filteredArr = person.filter((person) => person.age >= minAge)
    
    return filteredArr
  }
  
  
  console.log(filterByAge([{firstName: "Esther", lastName: "Lardze", age: 19}, {firstName: "Esther", lastName: "Lardze", age: 12}], 18))
  console.log(fullName({firstName: "Esther", lastName: "Lardze", age: 19}))