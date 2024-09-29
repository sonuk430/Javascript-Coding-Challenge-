function remove_chracter(str, char_pos) {
  const firstStep = str.substring(0, char_pos);
  const secoundStep = str.substring(char_pos + 1, str.lenght);
  return firstStep + secoundStep;
}

console.log(remove_chracter("sonu", 0));
console.log(remove_chracter("sonu", 3));
