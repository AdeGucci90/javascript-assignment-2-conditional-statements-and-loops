/**
 * Write a JavaScript functions that prints a right triangle of height n.
 * The name of your function must be printTriangle.
 * Use console.log() to print each line of
 * the triangle on a new line.
 * Each line of the triangle consists of
 * a string of * characters.
 * The function must take 1 argument corresponding
 * to the height of the triangle: n.
 * The function should return nothing.
 */

// Write your code here
function printTriangle(n) {
    for (var i = 1; i <= n; i++) {
        var row = '';
        for (var j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
}

// Example usage:
printTriangle(5);


// End of your code

// Do not modify code below this line.
// --------------------------------
