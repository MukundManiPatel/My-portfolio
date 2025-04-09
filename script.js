// script.js

// Get the screen element
const screen = document.getElementById('screen');

// Function to update the screen with the clicked button's value
function updateScreen(value) {
    screen.value += value;
}

// Function to clear the screen
function clearScreen() {
    screen.value = '';
}

// Function to calculate the result
function calculateResult() {
    try {
        // Use eval to evaluate the expression entered in the screen (not recommended for production code)
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
    }
}

// Function to handle the button clicks
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        // If the button clicked is 'C', clear the screen
        if (value === 'c' || value === 'C') {
            clearScreen();
        }
        // If the button clicked is '=', calculate the result
        else if (value === '=') {
            calculateResult();
        }
        // For any other button, update the screen
        else {
            updateScreen(value);
        }
    });
});
