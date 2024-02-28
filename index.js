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


