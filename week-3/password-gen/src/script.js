const passwordLength = document.querySelector(
  "#password-length"
);
const rangeInput = document.querySelector(".password-generator__range");
const numberInput = document.querySelector("#number");
const upperCaseInput = document.querySelector("#uppercase");
const lowerCaseInput = document.querySelector("#lowercase");
const symbolsInput = document.querySelector("#symbol");
const generateButton = document.querySelector(
  ".password-generator__generate-btn"
);
const passwordInput = document.querySelector("#password");
const copyIcon = document.querySelector(".password-generator__copy-icon");
const copyText = document.querySelector(".password-generator__copy-text");
const strengthBars = document.querySelectorAll(".strength-bar")
const strengthText = document.querySelector(".password-generator__strength-value-text")



rangeInput.addEventListener("change", function () {
  passwordLength.textContent = rangeInput.value;
});

window.addEventListener("DOMContentLoaded", () => {
  passwordLength.textContent = rangeInput.min;
});

const upperCaseLetters = [];
const lowerCaseLetters = [];
const numbers = [];
const symbols = [];

// Populating character arrays
for (let i = 65; i <= 90; i++) {
  upperCaseLetters.push(String.fromCharCode(i));
}

for (let i = 97; i <= 122; i++) {
  lowerCaseLetters.push(String.fromCharCode(i));
}

for (let i = 48; i <= 57; i++) {
  numbers.push(String.fromCharCode(i));
}

for (let i = 33; i <= 47; i++) {
  symbols.push(String.fromCharCode(i));
}

// Function to generate random characters
function generateRandomChar() {
  let chars = [];

  if (upperCaseInput.checked) {
    chars.push(
      upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
    );
  }
  if (lowerCaseInput.checked) {
    chars.push(
      lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]
    );
  }
  if (numberInput.checked) {
    chars.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }
  if (symbolsInput.checked) {
    chars.push(symbols[Math.floor(Math.random() * symbols.length)]);
  }

  if (!chars.length) return "";

  return chars[Math.floor(Math.random() * chars.length)];
}

// Function to generate the password
let password = "";

const generatePassword = () => {

  const length = parseInt(rangeInput.value, 10);

  for (let i = 0; i < length; i++) {
    password += generateRandomChar();
  }
  passwordInput.value = password;

  strengthIndicator();
};

// Event listeners
generateButton.addEventListener("click", generatePassword);


copyIcon.addEventListener("click", () => {
  const content = passwordInput.value;

  navigator.clipboard.writeText(content).then(() => {
    if (!passwordInput.value) {
      alert("Generate a password first");
    } else {
      copyText.style.display = "flex";
      copyText.textContent = "Copied!";
    }

    setTimeout(() => {
      copyText.style.display = "none";
    }, 2000);
  });
});

//function to cater for strenght indicator

function strengthIndicator() {
  const password = passwordInput.value; // Make sure you're using the actual password value
  const passwordlength = rangeInput.value;
  let score = 0;

  // Check if the password contains any character from the respective arrays
  if (upperCaseLetters.some((char) => password.includes(char))) score += 1;
  if (lowerCaseLetters.some((char) => password.includes(char))) score += 1;
  if (symbols.some((char) => password.includes(char))) score += 1;
  if (numbers.some((char) => password.includes(char))) score += 1;

  console.log(score); 

  strengthBars.forEach((bar) => bar.className = "strength-bar"); 
  strengthText.textContent = "";

  if (passwordlength < 8) {
    strengthBars[0].classList.add("Too weak");
    strengthText.textContent = "Strong";
  } else if (passwordlength >= 8 && score <= 1) {
    strengthBars[0].classList.add("weak");
    strengthBars[1].classList.add("weak");
    strengthText.textContent = "Weak";
  } else if (passwordlength >= 8 && score  >= 2) {
    strengthBars[0].classList.add("medium");
    strengthBars[1].classList.add("medium");
    strengthBars[2].classList.add("medium");
    strengthText.textContent = "Medium";
  } else if (passwordlength >= 12 && score >= 3) {
    strengthBars[0].classList.add("strong");
    strengthBars[1].classList.add("strong");
    strengthBars[2].classList.add("strong");
    strengthBars[3].classList.add("strong");
    strengthText.textContent = "Strong";
  }
}





