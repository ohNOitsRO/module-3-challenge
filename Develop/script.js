// Assignment code here
const chars = {
  alphaUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  alphaLower: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"   
}

let allChars= []

let emptyPassword = [];

const passwordLength = function () {

  const length = window.prompt("How long do you want your password to be?"); 
  
    if (length >= 8  && length <= 128) {

      alphaConfirm = window.confirm("Excellent! Would you like Upper Case characters in your password?");       
        if (alphaConfirm) {              
          emptyPassword.push(chars.alphaUpper[Math.floor(Math.random() * chars.alphaUpper.length)]);
          allChars = allChars.concat(chars.alphaUpper);          
        }
      
      lowerConfirm = window.confirm("Super! Would you like Lower Case characters in your password?");
        if (lowerConfirm) {     
          emptyPassword.push(chars.alphaLower[Math.floor(Math.random() * chars.alphaLower.length)]);
          allChars = allChars.concat(chars.alphaLower);
        }

      numbersConfirm = window.confirm("Awesome! Would you like Numbers in your password?");
        if (numbersConfirm) {
          emptyPassword.push(chars.numbers[Math.floor(Math.random() * chars.numbers.length)]);
          allChars = allChars.concat(chars.numbers);
        }

      symbolsConfirm = window.confirm("Fantastic! Would you like Symbols in your password?");
        if (symbolsConfirm) {
          emptyPassword.push(chars.symbols[Math.floor(Math.random() * chars.symbols.length)]);
          allChars = allChars.concat(chars.symbols);
        }

    }
    
    else {

        window.alert("This isn't a number between 8 and 128! Try Again!");
        passwordLength();
      
      }

    }

// for (i=0; i < length; i++) {
      
//   emptyPassword.push(allChars[Math.floor(Math.random() * allChars.length)]);

// }


for (let i = 0; i < allChars.length; i++) {
  for (let j = 0; j < allChars[i].length; j++) {
    emptyPassword.push(allChars[i][j]);
  }
}


passwordLength();

console.log(allChars.length);
console.log(allChars);
console.log(emptyPassword.toString());



// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {

//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);