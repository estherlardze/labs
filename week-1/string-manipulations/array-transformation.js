// function to double numbers in an array
const double = (arr) => {
  const newNumbers = arr.map((n) => n * 2);

  console.log(newNumbers);
};

// function to filter even numbers
const filterEven = (arr) => {
  const filteredArr = arr.filter((item) => item % 2 === 0);
  console.log(filteredArr);
};

// function to calculate sum of numbers in an array
const sum = (arr) => {
  let summ = 0;

  for (let i = 0; i < arr.length; i++) {
    summ += arr[i];
  }
  console.log(summ);
};

// function to calculate average of numbers
const average = (arr) => {
  let sum = 0;
  const noOfNumbers = arr.length;

  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
  }

  const average = sum / noOfNumbers;
  console.log(average);
};

average([1, 2, 3, 4, 4, 5]); // 3.1666666666666665
sum([1, 2, 3, 4, 4, 20]); // 34
filterEven([1, 2, 3, 4, 5, 6, 7, 8]); // [ 2, 4, 6, 8 ]
double([1, 2, 3, 4, 4, 5]); // [ 2, 4, 6, 8, 8, 10 ]

