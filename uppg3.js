// This function calculates the sum of two numbers and logs the result.
function uppg3(a = 5, b = 10) {
    // Ensure the inputs are numbers
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.error('Both arguments must be numbers.');
        return;
    }

    console.log(a + b); // Output the sum
}

module.exports = { uppg3 };
