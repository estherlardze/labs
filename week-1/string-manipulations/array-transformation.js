// function to double numbers in an array
const double = (arr) => {
  const newNumbers = arr.map((n) => n * 2);

  return newNumbers
};


// function to filter even numbers
const filterEven = (arr) => {
  const filteredArr = arr.filter((item) => item % 2 === 0);

  return filteredArr;
};

// function to calculate sum of numbers in an array
const sum = (arr) => {
  let summ = 0;

  for (let i = 0; i < arr.length; i++) {
    summ += arr[i];
  }

  return summ;
};

// function to calculate average of numbers
const average = (arr) => {
  let sum = 0;
  const noOfNumbers = arr.length;

  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
  }

  const average = sum / noOfNumbers;
  return average;
};

console.log(average([1, 2, 3, 4, 4, 5])); // 3.1666666666666665
conole.log(sum([1, 2, 3, 4, 4, 20])); // 34
console.log(filterEven([1, 2, 3, 4, 5, 6, 7, 8])); // [ 2, 4, 6, 8 ]
console.log(double([1, 2, 3, 4, 4, 5])); // [ 2, 4, 6, 8, 8, 10 ]

