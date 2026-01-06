// Select the display element
const display = document.getElementById('display');

// Function to add numbers/operators to the display
function appendToDisplay(input) {
    display.value += input;
}

// Function to clear the entire display (AC)
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character (DEL)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
        // Clear error after 1.5 seconds
        setTimeout(() => {
            display.value = '';
        }, 1500);
    }
}