// Part 1: JavaScript Basics

// Variables and Data Types
const name = "John Doe";
const age = 25;
const isStudent = true;
const colors = ["red", "green", "blue"];
const person = { name: "Alice", age: 30 };

console.log("Name:", name, "(Type:", typeof name, ")");
console.log("Age:", age, "(Type:", typeof age, ")");
console.log("Is student:", isStudent, "(Type:", typeof isStudent, ")");
console.log("Colors:", colors, "(Type:", typeof colors, ")");
console.log("Person:", person, "(Type:", typeof person, ")");

// Operators
function calculator() {
  const num1 = parseFloat(prompt("Enter the first number:"));
  const num2 = parseFloat(prompt("Enter the second number:"));
  const operator = prompt("Choose an operation (+, -, *, /):");

  if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid input. Please enter numbers.");
    return;
  }

  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        alert("Division by zero is not allowed.");
        return;
      }
      result = num1 / num2;
      break;
    default:
      alert("Invalid operator.");
      return;
  }

  alert("Result: " + result);
}

// Functions
function greetUser(name) {
  const greeting = "Hello, " + name + "!";
  const greetingElement = document.createElement("p");
  greetingElement.textContent = greeting;
  document.body.appendChild(greetingElement);
}

// Part 2: JavaScript Control Structures

// If Statements
const userAge = parseInt(prompt("Enter your age:"));

if (userAge >= 18) {
  const eligibilityMessage = document.createElement("p");
  eligibilityMessage.textContent = "You are eligible to vote.";
  document.body.appendChild(eligibilityMessage);
} else {
  const eligibilityMessage = document.createElement("p");
  eligibilityMessage.textContent = "You are not eligible to vote.";
  document.body.appendChild(eligibilityMessage);
}

// Loops
const numberList = document.createElement("ol");

for (let i = 1; i <= 10; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = i;
  numberList.appendChild(listItem);
}

document.body.appendChild(numberList);

// Call the calculator function
calculator();

// Call the greetUser function
greetUser("John");
