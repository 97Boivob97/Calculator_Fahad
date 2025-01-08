let resultDisplay = document.getElementById('result');
let buttons = document.querySelectorAll('.button');

let currentInput = '';
let lastResult = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.value;

        switch (value) {
            case 'AC':
                currentInput = '';
                resultDisplay.value = '';
                break;
            case 'DEL':
                currentInput = currentInput.slice(0, -1);
                resultDisplay.value = currentInput;
                break;
            case '=':
                try {
                    lastResult = eval(currentInput).toString();
                    resultDisplay.value = lastResult;
                    currentInput = lastResult;
                } catch (error) {
                    resultDisplay.value = 'Error';
                    currentInput = '';
                }
                break;
                case 'ANS':
                    currentInput = lastResult;
                    resultDisplay.value = currentInput;
                    break;
            default:
                currentInput += value;
                resultDisplay.value = currentInput;
                break;
        }
    });
});
