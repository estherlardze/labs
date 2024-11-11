// function to return full name
const fullName = (person) => {
    const fullname = `${person.firstName} ${person.lastName}` 
    return fullname  
    }

// funnction to check for adult
function isAdult(person) {
  if(person.age >= 18){
    return person;
  }else{
    return false
  }

}
   
  // function to Filters
  const filterByAge = (person, minAge) => {
     const filteredArr = person.filter((person) => person.age >= minAge)
    
    return filteredArr
  }

  // composite functions
  const compositeFxns =  (isAdult, fullName)
  
  
  console.log(filterByAge([{firstName: "Esther", lastName: "Lardze", age: 19}, {firstName: "Esther", lastName: "Lardze", age: 12}], 18))
  console.log(fullName({firstName: "Esther", lastName: "Lardze"})) // return Esther Lardze
  console.log(isAdult({firstName: "Esther", lastName: "Lardze", age: 12})) //
  console.log(compositeFxns({firstName: "Esther", lastName: "Lardze", age: 12}))
