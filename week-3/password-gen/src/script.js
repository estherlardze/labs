let passwordLength = document.querySelector('#password-length')
const rangeInput = document.querySelector('#range');
const numberInput = document.querySelector('#number');
const upperCaseInput = document.querySelector('#uppercase');
const lowerCaseInput = document.querySelector('#lowercase');
const symbolsInput = document.querySelector('#symbol');
const generateButton = document.querySelector('#generate');
const passwordInput = document.querySelector('#password');


rangeInput.addEventListener('change', function() {
    passwordLength.textContent = rangeInput.value;
})

const uppercase = []
const lowercase = []
const numbers = []
const symbols = []

for (let i = 65; i <= 90; i++) {
    uppercase.push(String.fromCharCode(i))
}

for (let i = 97; i <= 122; i++) {
    lowercase.push(String.fromCharCode(i))
}

for (let i = 48; i <= 57; i++) {
    numbers.push(String.fromCharCode(i))
}

for (let i = 33; i <= 47; i++) {
    symbols.push(String.fromCharCode(i))
}

let password = ''
let availableCharacters = ''


function generatePassword() {
   
  if(upperCaseInput.checked){
   password += getRandom(uppercase)
  }
  if(lowerCaseInput.checked){
   password += getRandom(lowercase)
  }
  if(numberInput.checked){
    password += getRandom(number)
   }
   if(symbolsInput.checked){
    password += getRandom(symbols)
   }

   passwordInput.value = password

  //console.log(password)
  return password
}

function getRandom(str){
    str[Math.floor(Math.random() * str.length)]
}




generateButton.addEventListener('click', generatePassword)




