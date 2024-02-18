/**
 * Write a JavaScript functions that creates a string
 * that represents a mxn grid,
 * using newline characters to separate lines.
 * Once the string is created,
 * the function then prints it to the console.
 * At each position of the grid there is
 * either a space or a # character.
 * The characters should form a chessboard.
 * The name of your first function must be chessboard.
 * The functions must take two arguments
 * corresponding to the size of the grid: m and n.
 * m is the number of rows
 * n is the number of columns
 * The function must return nothing.
 */

// Write your code here
function chessboard(m, n) {
    var grid = '';
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            // Alternate between space and #
            if ((i + j) % 2 === 0) {
                grid += ' ';
            } else {
                grid += '#';
            }
        }
        // Add newline character after each row
        grid += '\n';
    }
    console.log(grid);
}


// End of your code

// Do not modify code below this line
// --------------------------------
