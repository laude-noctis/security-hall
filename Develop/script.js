// Assignment code here
var passPrompt = prompt('How many characters long?'); {
  if (passPrompt >= 8 && passPrompt <= 128) {
  } else (window.alert('Password length must be between 8-128 characters long.'))
} return;

window.confirm('Include lowercase letters?');
window.confirm('Include uppercase letters?');
window.confirm('Include numeric values?');
window.confirm('Include special characters?');

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
