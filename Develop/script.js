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

  var includeLower = window.confirm("Would you like your password to include lowercase characters?")
  var includeUpper = window.confirm("Would you like your password to include uppercase characters?")
  var includeNumeric = window.confirm("Would you like your password to include numbers?")
  var includeSpecial = window.confirm("Would you like your password to include special characters?")
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
