var passPrompt
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var special = "!#$%&'()*+,-./:;<=>?@ []^_`{|}~"

// Assignment code here
function generatePassword() {
  passwordPrompt()
  var lowercasePrompt = window.confirm('Include lowercase letters?');
  if(lowercasePrompt) {
    storeCharacters.push(lowercase)
  }

  var uppercasePrompt = window.confirm('Include uppercase letters?');
  if(uppercasePrompt) {
  storeCharacters.push(uppercase)
  }

  var specialPrompt = window.confirm('Include special characters?');
  if (specialPrompt) {
    storeCharacters.push(special)
  }

  var numericPrompt = window.confirm('Include numeric values?');
  if (numericPrompt) {
    storeCharacters.push(numeric)
  }
}

function passwordPrompt() {
  passPrompt = prompt('How many characters long?'); {
    if (passPrompt >= 8 && passPrompt <= 128) {
      return;
    } else {
      (window.alert('Password length must be between 8-128 characters long.'));
      passwordPrompt();
    }
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
