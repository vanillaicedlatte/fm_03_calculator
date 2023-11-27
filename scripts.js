const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const backspaceButton = document.querySelector(".backspace");
const operators = ["+", "-", "/", "*"];
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

        switch (operatorValue) {

            case "÷":
            operatorValue = "/";
            break;

            case "×":
            operatorValue = "*";
            break;

            case "-":
            operatorValue = "-";
            break;

            case "+":
            operatorValue = "+";
            break;
        }

        calculationArray.push(currentInput);

        if (operatorValue != "=") {
            const lastOperator = calculationArray[calculationArray.length - 2];
            if (operators.includes(lastOperator) == true) {
                calculationArray = calculationArray.slice(0,1);
                calculationArray.push(operatorValue);
            } else {
            calculationArray.push(operatorValue);
            }
            }
        if (operatorValue == "=") {

            letsDoMath(calculationArray);

        }

                // Update the input element
                currentInput = "";
    });
})

function letsDoMath(arr) {
    let result = parseFloat(arr[0]); {
        for (let i = 1; i < arr.length; i += 2) {
            let operator = arr[i];
            let operand = parseFloat(arr[i + 1]);
        switch (operator) {
            case '+':
                result += operand;
                break;
            case '-':
                result -= operand;
                break;
            case '*':
                result *= operand;
                break;
            case '/':
                result /= operand;
                break;
            default:
                // Handle unexpected operators
                break;
        }
    }
    console.log(result);
    document.querySelector(".input").setAttribute("value", result);
    return result;
}
        }


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