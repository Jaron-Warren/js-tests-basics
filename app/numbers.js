// Write a function that uses the addition operator to add two numbers together
function add(x, y) {
  return x + y
}

// Write a function that returns the Cubed value of x
function cubed(x) {
  return x * x * x
}

// Write a function that will divide two numbers, and will format the returned value
// as a whole number. (No Decimals)
function divideWholey(x, y) {
  integer = x / y
  console.log(integer)
  return Math.floor(integer)
}

// Write a function that takes in a number and determines if it is even. 
// It should return a boolean value - true if it is even, false if it is odd.
function isEven(num) {
  integer = num % 2
  if (integer == 0) {
    return true
  } else {
    return false
  }
}


// Given 2 numbers, generate a random number within that range. 
// Make it inclusive so that the starting and ending numbers are part 
// of the range.HINT ** Utilize Javascript's Math Class (To the Google!)
function numberGenerator(num1, num2) {
  if (num1 > num2) {
    return Math.floor(Math.random() * (num1 - num2) + num2)
  }
  else {
    return Math.floor(Math.random() * (num2 - num1) + num1)
  }
}