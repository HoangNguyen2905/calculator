
let resultEl = document.getElementById("result-el")


function add() {
    let num1 = document.getElementById("num1-el").value
    let num2 = document.getElementById("num2-el").value
    document.getElementById("number-id").textContent = num1 + " + " + num2
    
    let result = parseFloat(num1) + parseFloat(num2)
    resultEl.textContent = "Result is: " + result
}

function subtract() {
    let num1 = document.getElementById("num1-el").value
    let num2 = document.getElementById("num2-el").value
    document.getElementById("number-id").textContent = num1 + " - " + num2
    
    let result = parseFloat(num1) - parseFloat(num2)
    resultEl.textContent = "Result is: " + result
}

function multiply() {
    let num1 = document.getElementById("num1-el").value
    let num2 = document.getElementById("num2-el").value
    document.getElementById("number-id").textContent = num1 + " * " + num2
    
    let result = parseFloat(num1) * parseFloat(num2)
    resultEl.textContent = "Result is: " + result
}

function divide() {
    let num1 = document.getElementById("num1-el").value
    let num2 = document.getElementById("num2-el").value
    document.getElementById("number-id").textContent = num1 + " : " + num2
    
    let result = parseFloat(num1) / parseFloat(num2)
    resultEl.textContent = "Result is: " + result
}