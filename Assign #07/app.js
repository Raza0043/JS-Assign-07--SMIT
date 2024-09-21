s
var userInput = prompt("Please enter a word:");

// Reverse 
var reversedInput = "";

for (var i = userInput.length - 1; i >= 0; i--) {
    reversedInput += userInput[i]; 
}


document.write("Original Word: " + userInput + "<br>");
document.write("Reversed Word: " + reversedInput + "<br>");


if (userInput === reversedInput) {
    document.write("It is a palindrome.");
} else {
    document.write("It is not a palindrome.");
}
