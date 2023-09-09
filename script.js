document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.querySelector('.input');
    const buttons = document.querySelectorAll('.btn');

    let inputExpression = '';
    let resultValue = '';
    let displayedInput = ''; // Variable to track what's displayed in the input field

    buttons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            const buttonValue = event.target.textContent.trim();

            if (buttonValue === '=') {
                try {
                    resultValue = eval(inputExpression);
                    inputField.value = resultValue;
                } catch (error) {
                    inputField.value = 'Error';
                }
                inputExpression = ''; // Clear the input expression
                displayedInput = resultValue.toString(); // Update the displayed input
            } else if (buttonValue === 'RESET') {
                inputExpression = '0';
                resultValue = '0';
                inputField.value = '0';
                displayedInput = '0'; // Clear the displayed input
            } else if (buttonValue === 'DEL') {
                inputExpression = inputExpression.slice(0, -1);
                displayedInput = displayedInput.slice(0, -1);
                inputField.value = displayedInput; // Update the displayed input in the field
            } else {
                inputExpression += buttonValue;
                displayedInput += buttonValue;
                inputField.value = displayedInput; // Update the displayed input in the field
            }
        });
    });
});





