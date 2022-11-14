// Assignment Code
var generateBtn = document.querySelector("#generate");

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria


// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

function generatePassword() {
  var charLength = window.prompt("How many characters would you like your password to be? (Min 8 Max 128)");

  if (charLength < 8 || charLength > 128) {
    window.alert("Password length must be at least 8 characters and no more than 128 characters."); return;
  }

  if (isNaN(charLength)) {
    window.alert("Select a password length between 8 and 128 characters.");
    return;
  }

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

  var includeLower = window.confirm("Would you like your password to include lowercase characters?")
  var includeUpper = window.confirm("Would you like your password to include uppercase characters?")
  var includeNumeric = window.confirm("Would you like your password to include numbers?")
  var includeSpecial = window.confirm("Would you like your password to include special characters?")

  var charSetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  var charSetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var charSetNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  var charSetSpecial = [" ", "!", "''", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

  var charSet = []

  if (includeLower === true) {
    charSet.push(...charSetLower)
  }

  if (includeUpper === true) {
    charSet.push(...charSetUpper)
  }

  if (includeNumeric === true) {
    charSet.push(...charSetNumeric)
  }

  if (includeSpecial === true) {
    charSet.push(...charSetSpecial)
  }

  console.log(charSet)

  //randomize the charSet array
  charSet.sort(() => Math.random() - 0.5);

  console.log(charSet)

  for (var i = 0; i < charLength; i += 3) {
    console.log(charSet[i])

  }
  //pick charLength number of charaters from the randomized charSet array
  //starting from 0, ending with charLength number
  var passwordSet = charSet.slice(0, charLength);

  console.log(passwordSet)

  //combine array items into a string
  var lastPass = (passwordSet.join(''));

  return (lastPass);

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
