let PassPrompt = passwordPrompt()
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let special = "!#$%&'()*+,-./:;<=>?@ []^_`{|}~"

// Assignment code here
function generatePassword() {
  passwordPrompt()
  charactersLowercase()
  charactersUppercase()
  charactersNumeric()
  charactersSpecial()
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

function charactersLowercase() {
  lowercase = window.confirm('Include lowercase letters?'); {
    if (true) {
      lowercase   
    } else {
      false
    }
  }
}

function charactersUppercase() {
  uppercase = window.confirm('Include uppercase letters?'); {
    if (true) {
      uppercase   
    } else {
      false
    }
  }
}

function charactersNumeric() {
  numeric = window.confirm('Include numeric values?'); {
    if (true) {
      numeric   
    } else {
      false
    }
  }
}

function charactersSpecial() {
  special = window.confirm('Include special characters?'); {
    if (true) {
      special   
    } else {
      false
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
