// Import the 'readline' module to handle user input
import readline from 'readline';

// Create an interface for input and output streams
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for the first operand
r1.question('Enter 1st Operant: ', (n1) => {
    // Convert the first operand to a number
    const operand1 = parseFloat(n1);
    // Prompt the user for the operator
    r1.question('Enter Operator (+, -, *, /): ', (optr) => {
        // Prompt the user for the second operand
        r1.question('Enter 2nd Operant: ', (n2) => {
            // Convert the second operand to a number
            const operand2 = parseFloat(n2);
            let result;
            // Perform the calculation base on the operator
            switch (optr) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    // Handle division by zero
                    if (operand2 === 0) {
                        console.error("Error: Division by zero is not allowed.");
                        // Close the readline interface
                        r1.close();
                        return;
                    }
                    result = operand1 / operand2;
                    break;

                default:
                    console.error("Error: Invalid operator.");
                    // Close the readline interface
                    r1.close();
                    return;
            }

            // Display the result
            console.log(`The result of ${operand1} ${optr} ${operand2} is: ${result}`);
            // Close the readline interface
            r1.close();
        })
    })
});
