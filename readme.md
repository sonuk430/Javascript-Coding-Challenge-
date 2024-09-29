# JS Challenge

This coding challenge is designed to help you practice JavaScript skills that are commonly tested in technical interviews.

## Table of Challenges

### Q1.Write a JavaScript program to find which 1st January is a Sunday between 2014 and 2050.

<details>
<summary>Click to view code</summary>

```javascript
for (let year = 2012; year <= 2050; year++) {
  let day = new Date(year, 0, 1);
  if (day.getDay() === 0) {
    console.log("1st January is being a sunday" + year);
  }
}
```

</details>

<!-- ********************* -->

### Q2.Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

<details>
<summary>Click to view code</summary>

```javascript
function remove_chracter(str, char_pos) {
  const firstStep = str.substring(0, char_pos);
  const secoundStep = str.substring(char_pos + 1, str.lenght);
  return firstStep + secoundStep;
}

console.log(remove_chracter("sonu", 0)); //onu
console.log(remove_chracter("sonu", 3)); // son
```

</details>

<!-- ********************* -->
