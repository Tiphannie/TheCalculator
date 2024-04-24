document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let prevValue = null;

    function clearDisplay() {
        display.value = '';
        currentInput = '';
        operator = '';
        prevValue = null;
    }

    function calculate() {
        const currentValue = parseFloat(currentInput);
        if (!isNaN(currentValue)) {
            switch (operator) {
                case '+':
                    prevValue += currentValue;
                    break;
                case '-':
                    prevValue -= currentValue;
                    break;
                case '*':
                    prevValue *= currentValue;
                    break;
                case '/':
                    if (currentValue !== 0) {
                        prevValue /= currentValue;
                    } else {
                        clearDisplay();
                        display.value = 'Error';
                        return;
                    }
                    break;
            }
            display.value = prevValue;
            currentInput = prevValue.toString();
            operator = '';
        }
    }

    document.querySelectorAll('.buttons button').forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent;
            if (buttonText >= '0' && buttonText <= '9' || buttonText === '.') {
                if(currentInput.length < 4 ) { 
                    currentInput += buttonText;
                display.value = currentInput; }
            } else if (buttonText === 'C') {
                clearDisplay();
            } else if (buttonText === '=') {
                calculate();
       /*      } else if (buttonText === '-') {
                    if (currentInput === '' && prevValue === null) {
                        currentInput += '-';
                        display.value = currentInput;
                    } else if(currentInput === '-' && prevValue === null){
                        currentInput = ' '; 
                        display.value = currentInput; 
                        operator = ' '; 
                    } */
            } else {
                operator = buttonText;
                prevValue = parseFloat(currentInput);
                currentInput = '';
            }
        });
    });
});