// MATHEMATIC OPERATIONS

var add = function (num1, num2) {
	return num1 + num2
}

var subtract = function (num1, num2) {
	return num1 - num2
}

var multiply = function (num1, num2) {
	return num1 * num2
}

var divide = function (num1, num2) {
	return num1 / num2
}

// DISPLAY RESULT

var display = function (result) {
	$(".screen").html(result);
}

// VARIABLES

var operand1 = "";
var operand2 = "";
var operator = "";
var computed = false;

// ADD EVENT LISTENER

var buttons = $(".button");
for (var i = 0; i < buttons.length; i++)  {
	buttons[i].addEventListener("click", function () {
		handleInput(event.target.innerHTML);
	}, false)
}

// DEFINE TYPE OF INPUT: NUMBER, OPERATOR, EQUALS OR CLEAR

var typeOfInput = function (input) {
	if (input == "=" || input == "clear") {
		return input
	} else if (input.search(/[0123456789.]/) !== -1){
		return "number"
	} else {
		return "operator"
	}
}

// HANDLE INPUT

var handleInput = function (input) {
	switch (typeOfInput(input)) {
		case "number":
			handleNumber(input);
			break;
		case "operator":
			handleOperator(input);
			break;		
		case "=":
			handleEquals();
			break;
		case "clear":
			handleClear();
			break;
	}
}

var handleNumber = function (input) {
	if (computed) {
		handleClear();
		computed = false;
	}
	if (operator == "") {
		operand1 += input;
		display(operand1);
	} else {
		operand2 += input;
		display(operand2);
	}
}

var handleOperator = function (input) {
	if (operand2 !== "") {
		display(handleEquals());
	}
	computed = false;
	operator = input;
}

var handleEquals = function () {
	var result;
	computed = true;
	if (operand2 == "") {
		operand2 = operand1;
	}
	switch (operator) {
		case "":
		return operand1;
		break;
		case "*":
		result = multiply(parseFloat(operand1), parseFloat(operand2));
		break;
		case "/":
		result = divide(parseFloat(operand1), parseFloat(operand2));
		break;
		case "+":
		result = add(parseFloat(operand1), parseFloat(operand2));
		break;
		case "-":
		result = subtract(parseFloat(operand1), parseFloat(operand2));
		break;
	}
	operand1 = result;
	operand2 = "";
	display(result);
	return result;
}

var handleClear = function () {
	operand1 = "";
	operand2 = "";
	operator = "";
	display("");
}