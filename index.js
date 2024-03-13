// day-01 coding challenges
//  quation No:-01
var x = Math.floor(Math.random());
// var x = Math.floor(); // out put is NAN
// var x = Math.random();
// console.log(x);

if (x > 0.5) {
  var x = 1;
} else {
  var x = 2;
}

// console.log(x);

//  quation No:-02
//  Flatten an Array of Arrays

let arr = [
  [0, 1],
  [2, 3],
  [4, 5],
];

// 1st method
// let flatenArr = arr.flat();

// console.log(flatenArr); // output is [0, 1, 2, 3, 4, 5]

// 2nd method

const FleteArr = arr.reduce(
  (previousValue, currentValue) => previousValue.concat(currentValue),
  []
);

// console.log(FleteArr);

// 1. Write a JavaScript function to check whether an `input` is an array or not.

function isarr(input) {
  if (toString.call(input) === "[object Array]") {
    return true;
    return false;
  }
}
// console.log(isarr([1,2]));


//  Question 1: Sum of all natural numbers from 1 to n
// Question 2: Sum of digits of a number
// Question 3: Count the number of digits of a number
// Question 4: Check if a number is palindrome
// Question 5: Find nth Fibonacci number
// Question 6: Missing Number in an Array
// Question 7: Count Odd Numbers in an Interval Range
// Question 8: Power of Two
// Question 9: Find Square root of a Number


function sumOfNaturalNumber(num){
  let sum = 0;
  for(let i = 0; i<=num;i++){
    sum = sum + 1;
  }
  return sum;
}



