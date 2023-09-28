function handleButtonClick(event) {
    const value = event.target.getAttribute('data-value');
    const inputNumber = document.getElementById('calculator_input_Number');
    
    switch (value) {
        case '=':
            try {
                inputNumber.value = eval(inputNumber.value);
            } catch (error) {
                inputNumber.value = 'Error';
            }
            break;
        case 'AC':
            inputNumber.value = '';
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            // made by fierjet675
            const lastChar = inputNumber.value.slice(-1);
            if (['+', '-', '*', '/'].includes(lastChar)) {
                inputNumber.value = inputNumber.value.slice(0, -1) + value;
            } else {
                inputNumber.value += value;
            }
            break;
        default:
            inputNumber.value += value;
    }
}
