// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Variable declaration 
var confirmSpecialCharacters;
var confirmNumericCharacters;
var confirmUpperCasedCharacters;
var confirmLowerCasedCharacters;
var confirmLength = "";

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

  // Prompt asking for user input to choose how many characters for the password
  enter = parseInt(prompt("How many characters would you like for your password? You may choose between 10 and 64."));

  // Ensuring the character length chosen is between 10 and 64 - if not an alert will be displayed and the prompt will be asked again
  while (confirmLength <= 9 || confirmLength >= 65) {
    alert("Password length must be between 10 and 64 characters. Please try again");
    var confirmLength = (prompt("How many characters would you like for your password? You may choose between 10 and 64."));
  }

  // Validating to the user how many characters they've chosen for their password  
  alert(`Your password will have ${confirmLength} characters`);

  // Asking the user to confirm which characters they'd like to use for their password
  confirmNumericCharacters = confirm("Would you like your password to contain numbers?");
  confirmSpecialCharacters = confirm("Would you like your password to contain special characters?");
  confirmUpperCasedCharacters = confirm("Would you like your password to contain uppercase characters?");
  confirmLowerCasedCharacters = confirm("Would you like your password to contain lowercase characters?");

  // If none of the characters are confirmed by the user then it will alert them to their error and ask them to confirm at least one in order to generate password - if it happens again it will then loop
  while (confirmUpperCasedCharacters === false && confirmLowerCasedCharacters === false && confirmSpecialCharacters === false && confirmNumericCharacters === false) {
    alert("You must choose at least one of the criterea to generate a password.");
    confirmNumericCharacters = confirm("Would you like your password to contain numbers?");
    confirmSpecialCharacters = confirm("Would you like your password to contain special characters?");
    confirmUpperCasedCharacters = confirm("Would you like your password to contain uppercase characters?");
    confirmLowerCasedCharacters = confirm("Would you like your password to contain lowercase characters?");
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);