// Assignment code here
const chars = {
    alphaUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    alphaLower: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
}

const passwordLength = function () {
  // prompting window for length of password
  const length = window.prompt("How long do you want your password to be?");
  // tryAgain function
  function tryAgain() {
    // Get tryAgain boolean with prompt
    const tryAgain = window.confirm("That's not a number btween 8 and 128!");
    // Checking their response on "Try again? question"
    if (tryAgain) {
      return passwordLength();
    }
  }

  // Checking if you put a valid password length
  if (length > 8  && length < 128) {
    // alerting window if so
    window.alert("You are the one!");
    // Otherwise you might be the one
  } else if (name.toUpperCase() === "TRINITY") {
    // asking for confirmation on Oneness status
    const isTheOne = window.confirm("Whoa, wait, do you think maybe you're the one?");
    // Checking if response is confirm
    if (isTheOne) {
      // and alerting window if so
      window.alert("Who needs Neo!!?\n\nYou are the one!!!");
      // if they deny Oneness, ask to try agin
    } else {
      tryAgain();
    }
    // If they aren't Neo or Trinity, ask to try again
  } else {
    tryAgain();
  }
}

passwordLength();


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
