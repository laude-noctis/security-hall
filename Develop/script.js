var passPrompt
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var special = "!#$%&'()*+,-./:;<=>?@ []^_`{|}~"
  var charSets = {
 passwordPrompt;
  lowercase,
  uppercase,
  numeric,
  special
  }
// Assignment code here
function generatePassword() {
  passwordPrompt()
  charactersLowercase()
  charactersUppercase()
  charactersNumeric()
  charactersSpecial()


  // };
  // var charSet = charSets[charType.toLowerCase()] || charSets.lowercase;
  // var retVal = "";
  // for (var i = 0; i < length; i++) {
  //   retVal += charSets.charAt(Math.floor(Math.random() * charSets.length));
  // }
  // return retVal;
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
