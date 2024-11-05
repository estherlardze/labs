// capitalise a string
const capitalize = (str) => {
  const capitalisedName = str[0].toUpperCase() + str.slice(1);
  console.log(capitalisedName);
};

// function to reverse a string
const reverse = (str) => {
  const reversedString = str.split("").reverse().join("");

  console.log(reversedString);
};

// check for palindome
const isPalindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");
  const palindrome = reversedStr === str;
  console.log(palindrome);
};

// count number of words in s string
const wordCount = (str) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    count++;
  }
  console.log(count);
};

// function calls
wordCount("hey there"); // 9
isPalindrome("noon"); // true
capitalize("esther"); // Esther
reverse("esther"); // rehtse
