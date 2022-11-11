// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var charLength = window.prompt("How many characters would you like your password to be? (Min 8 Max 128)");

  if (charLength < 8 || charLength > 128) {
    window.alert("Password length must be at least 8 characters and no more than 128 characters."); return;
  }

  if (isNaN(charLength)) {
    window.alert("Select a password length between 8 and 128 characters.");
    return;
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // var charLength = window.prompt("How many characters would you like your password to be? (Min 8 Max 128)");

  // if (charLength < 8 || charLength > 128) {
  //   window.alert("Password length must be at least 8 characters and no more than 128 characters."); return;
  // }

  // if (isNaN(charLength)) {
  //   window.alert("Select a password length between 8 and 128 characters.");
  //   return;
  // }
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
