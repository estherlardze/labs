// capitalise a string
const capitalize = (str) => {
  const capitalisedName = str[0].toUpperCase() + str.slice(1);

  return capitalisedName
};


// function to reverse a string
const reverse = (str) => {
  const reversedString = str.split("").reverse().join("");

  return reversedString
};


// check for palindome
const isPalindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");
  const palindrome = reversedStr === str;

  return palindrome;
};


// count number of words in s string
const wordCount = (str) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    count++;
  }

  return count;
};

// function calls
console.log(wordCount("hey there")); // 9
console.log(isPalindrome("noon")); // true
console.log(capitalize("esther")); // Esther
console.log(reverse("esther")); // rehtse
