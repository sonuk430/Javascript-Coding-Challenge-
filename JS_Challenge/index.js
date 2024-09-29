// Q2.Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

// function remove_chracter(str, char_pos) {
//   const firstStep = str.substring(0, char_pos);
//   const secoundStep = str.substring(char_pos + 1, str.lenght);
//   return firstStep + secoundStep;
// }

// console.log(remove_chracter("sonu", 0));
// console.log(remove_chracter("sonu", 3));

//  ***********************************
// Q3.  Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.

function front_back(str) {
  const first = str.substring(0, 1);
  return first + str + first;
}

console.log(front_back("Sonu_")); // SSonu_s
