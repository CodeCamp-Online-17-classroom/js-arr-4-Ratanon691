let arr = []
let input

while (true) {
  input = prompt("Enter a number (or a non-number to stop):")
  let num = Number(input)
  if (!isNaN(num)) {
    arr.push(num)
  } else {
    break
  }
}
let sum = arr.reduce((acc, current) => acc + current, 0)

console.log("Numbers entered:", arr)
console.log("Sum of numbers:", sum)

