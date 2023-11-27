const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const backspaceButton = document.querySelector(".backspace");
let currentInput = "";
let calculationArray = [];

// For each numberButton, get the data-value attribute
numberButtons.forEach(button => {
    button.addEventListener("click", function() {
        let numberValue = button.getAttribute("data-value");     
        if (numberValue == null) {
            numberValue = 0;
        };
        // If currentInput is "0" or an operator, start a new input
        if (currentInput === "0") {
            currentInput = numberValue;
        } else {
            // Concatenate the number to the existing input
            currentInput += numberValue;
        }
        // Update the input element
        document.querySelector(".input").setAttribute("value", currentInput);
    });
});

// For each numberButton, get the inner HTML
operatorButtons.forEach(button => {
    button.addEventListener("click", function() {
        let operatorValue = button.innerHTML;
        if (operatorValue == "÷") {
            operatorValue = "/";
        } else if (operatorValue == "×") {
            operatorValue = "*";
        } else if (operatorValue == "-") {
            operatorValue = "-"
        } else if (operatorValue == "+") {
            operatorValue = "+";
        }
        calculationArray.push(currentInput);
        if (operatorValue != "=") {
            calculationArray.push(operatorValue);
            }
        if (operatorValue == "=") {
            let formula = calculationArray.join('');
            console.log(formula);
        }
                // Update the input element
                currentInput = "";
    });
})

// clear button
clearButton.addEventListener("click", function() {
    currentInput = "";
    calculationArray = [];
    document.querySelector(".input").setAttribute("value", "");
})

// backspace button
backspaceButton.addEventListener("click", function() {
    currentInput = currentInput.substring(0, currentInput.length - 1);
    document.querySelector(".input").setAttribute("value", currentInput);
})