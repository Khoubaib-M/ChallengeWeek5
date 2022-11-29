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

// Function to prompt user for password options
function getPasswordOptions() {
  var pw_length = prompt("Enter the number of characters you would like in your password. (Must be between 10 to 64)");

  while (pw_length < 10 || pw_length > 64 || isNaN(parseInt(pw_length))) {
    var pw_length = prompt("MUST enter a number between 10 to 64");
  }
}

var criteria = [
  {
    userchoice: confirm("Do you want your password to contain lowercase characters?"),
    characters: lowerCasedCharacters
  },
  {
    userChoice: confirm("Do you want your password to contain uppercase characters?"),
    characters: upperCasedCharacters
  },
  {
    userChoice: confirm("Do you want your password to contain special characters?"),
    characters: specialCharacters
  },
  {
    userChoice: confirm("Do you want your password to contain numbers?"),
    characters: numericCharacters
  }
]

criteria.forEach(items => {
  console.log(items.userChoice);
  if (items.userChoice === true) {
    arr.push(items.characters);
  }
});

console.log(arr);
var output = [arr, userInput];
return output;


// Function for getting a random element from an array
function getRandom(arr) {
  var emptyArray = [];

  for (var i = emptyArray.length; i < arr[1]; i++) {
    var indexRandom = Math.floor(Math.random(arr[0].length) * arr[0].length);
    console.log('Random choice of index: ', indexRandom);
    var randomArray = Math.floor(Math.random(arr[0][indexRandom].length) * arr[0][indexRandom].length);
    console.log(randomArray);
    var char = arr[0][indexRandom][randomArray];
    emptyArray.push(char);
  }

  console.log(emptyArray);
  return emptyArray;
}

// Function to generate password with user input
function generatePassword() {

}

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