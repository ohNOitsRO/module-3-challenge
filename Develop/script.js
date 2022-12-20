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
    const tryAgain = window.confirm("That's not a number between 8 and 128!");
    // Checking their response on "Try again? question"
    if (tryAgain) {
      return passwordLength();
    }
    else {
      window.alert("Sad to see you go! Come back soon!")
    }
  }


  if (length > 8  && length < 128) {
    
   const ifUpper = window.prompt("Excellent! Would you like Upper Case characters in your password?");
    
  } else if (ifUpper === false) {
    
    const isTheOne = window.confirm("Whoa, wait, do you think maybe you're the one?");
  
  } else {


  }

    if (isTheOne) {
      
      window.alert("Who needs Neo!!?\n\nYou are the one!!!");
   
    } else {
      tryAgain();
    }
 
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

