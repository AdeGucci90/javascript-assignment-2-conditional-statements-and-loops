/**
 * Write a JavaScript functions that takes
 * a string and an integer as arguments and
 * prints a string with the letters shifted by the integer,
 * preserving the case of each letter.
 * The name of your function must be caesarCipher.
 * Use console.log() to print the output.
 * The function must take 2 arguments:
 * str is the string to be encrypted
 * shift is the number of characters to shift
 * The function must return nothing.
 */

// Write your code here
function caesarCipher(str, shift) {
    var result = '';
    for (var i = 0; i < str.length;i++){
        var charCode = str.charCodeAt(i);
        if (charCode >=65 && charCode <=90) {
//Uppercase letters
        result += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
 // Lowercase letters
       result += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
     } else {
 // Non-alphabetic characters
     result += str[i];       
     }
    }
     console.log(result) 
  }
    


// End of your code

// Do not modify code below this line
// --------------------------------
