let firstOperand = '';
let secondOperand = '';
let operation = null;
let shouldResetScreen = false;      // Reset the screen after an operation
let hasError = false;               // Error flag

// UI
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButtons = document.getElementById('equalBtn');
const clearButton = document.getElementById('clearBtn');
const positiveNegativeButton = document.getElementById('posNegBtn');
const percentButton = document.getElementById('percentBtn');
const pointButton = document.getElementById('pointBtn');
const currentScreen = document.getElementById('currentScreen');
const previousScreen = document.getElementById('previousScreen');
const display = document.getElementById('display');

window.addEventListener('keydown', (e) => {
    handleKeyboardInput(e.key);
});

equalsButtons.addEventListener('click', () => {
    evaluate();
});

clearButton.addEventListener('click', () => {
    handleClear();
});

positiveNegativeButton.addEventListener('click', () => {
    flipSign();
});

percentButton.addEventListener('click', () => {
    percent();
});

pointButton.addEventListener('click', () => {
    appendPoint();
});

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        setOperation(convertOperator(button.textContent));
    });
});

function convertOperator(operator) {
    if (operator === '×') return '*';
    if (operator === '÷') return '/';
    if (operator === '−') return '-';
    if (operator === '+') return '+';
}

function reverseOperator(operator) {
    if (operator === '*') return '×';
    if (operator === '/') return '÷';
    if (operator === '-') return '−';
    if (operator === '+') return '+';
}

let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

display.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

display.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
    endY = e.touches[0].clientY;
});

display.addEventListener('touchend', (e) => {
    const diffX = endX - startX;
    const diffY = endY - startY;

    // Check if the swipe was more horizontal than vertical and if it was a right swipe
    if (Math.abs(diffX) > Math.abs(diffY) && diffX > 50) {
        deleteNumber();
    }
});

function appendNumber(number) {
    if (hasError) allClear();  // Clear everything if in error state
    if (currentScreen.textContent === '0' || shouldResetScreen) resetScreen();
    currentScreen.textContent += number;
    clearButton.textContent = 'C'; // Change to 'C' after typing starts
}

function resetScreen() {
    currentScreen.textContent = '';
    shouldResetScreen = false;
}

function handleClear() {
    if (clearButton.textContent === 'AC') {
        allClear();
    } else {
        clear();
    }
}

function allClear() {
    currentScreen.textContent = '0';
    previousScreen.textContent = '';
    firstOperand = '';
    secondOperand = '';
    operation = null;
    shouldResetScreen = false;
    hasError = false;
}

function clear() {
    currentScreen.textContent = '0';
    shouldResetScreen = true;
    clearButton.textContent = 'AC';
}

function appendPoint() {
    if (hasError) clear();  // Clear error state if present
    if (shouldResetScreen) resetScreen();
    if (currentScreen.textContent === '') currentScreen.textContent = '0';
    if (currentScreen.textContent.includes('.')) return;
    currentScreen.textContent += '.';
}

function flipSign() {
    if (hasError) clear();  // Clear error state if present
    currentScreen.textContent = currentScreen.textContent.charAt(0) === '-' ? currentScreen.textContent.slice(1) : `-${currentScreen.textContent}`;
}

function percent() {
    if (hasError) clear();  // Clear error state if present
    currentScreen.textContent = `${parseFloat(currentScreen.textContent) / 100}`;
}

function deleteNumber() {
    if (hasError) clear();  // Clear error state if present
    currentScreen.textContent = currentScreen.textContent.toString().slice(0, -1);
    if (currentScreen.textContent === '') currentScreen.textContent = '0';
}

function setOperation(operator) {
    if (hasError) return;  // Do nothing if in error state
    if (operation !== null) evaluate();
    firstOperand = currentScreen.textContent;
    operation = operator;
    previousScreen.textContent = `${firstOperand} ${reverseOperator(operation)}`;
    shouldResetScreen = true;
}

function evaluate() {
    if (operation === null || shouldResetScreen) return;
    secondOperand = currentScreen.textContent;
    currentScreen.textContent = roundResult(operate(operation, firstOperand, secondOperand))
    previousScreen.textContent = `${firstOperand} ${reverseOperator(operation)} ${secondOperand} =`;
    operation = null;
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}

function handleKeyboardInput(e) {
    if (hasError && e.key !== 'Escape') return;  // Ignore all inputs except 'Escape' if in error state
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
    if (e.key === '.') appendPoint();
    if (e.key === '=' || e.key === 'Enter') evaluate();
    if (e.key === 'Backspace') deleteNumber();
    if (e.key === 'Escape') clear();
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
        setOperation(e.key);
}

function add(a, b) {
    return a + b
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case '+':
            return add(a, b)
        case '-':
            return substract(a, b)
        case '*':
            return multiply(a, b)
        case '/':
            if (b === 0) return 'Errpr'
            else return divide(a, b)
        default:
            return null
    }
}