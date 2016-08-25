/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiply(num1, num2){
  return num1 * num2;
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function add(num1, num2){
  return num1 + num2;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtract(num1, num2){
  return num1 - num2;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divide(num1, num2){
  return num1 / num2;
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
function calculation(num1, num2, mathType){
  switch(mathType){
    case "add":{
      return add(num1, num2);
      break;
    }
    case "subtract":{
      return subtract(num1, num2);
      break;
    }
    case "multiply":{
      return multiply(num1, num2);
      break;
    }
    case "divide":{
      return divide(num1, num2);
      break;
    }
  }
}
var num1 = 0, num2 = 0;
var num1Element = document.getElementById("num1");
var num2Element = document.getElementById("num2");
var addBtn = document.getElementById("add");
var subtractBtn = document.getElementById("subtract");
var multiplyBtn = document.getElementById("multiply");
var divideBtn = document.getElementById("divide");
var resultDiv = document.getElementById("result");

num1Element.addEventListener("change", function(){
  num1 = parseFloat(num1Element.value);
})

num2Element.addEventListener("change", function(){
  num2 = parseFloat(num2Element.value);
})

addBtn.addEventListener("click", function(event){
  event.preventDefault();
  resultDiv.innerHTML = calculation(num1, num2, "add");
})

subtractBtn.addEventListener("click", function(event){
  event.preventDefault();
  resultDiv.innerHTML = calculation(num1, num2, "subtract");
})

multiplyBtn.addEventListener("click", function(event){
  event.preventDefault();
  resultDiv.innerHTML = calculation(num1, num2, "multiply");
})

divideBtn.addEventListener("click", function(event){
  event.preventDefault();
  resultDiv.innerHTML = calculation(num1, num2, "divide");
})

