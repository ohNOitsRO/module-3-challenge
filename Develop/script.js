// Assignment code here
const alphaUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const alphaLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const symbols = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\]","^","_","`","{","|","}","~"];   

let allChars= [];

let ifConfirm = true;
let userChoice = [];
let emptyPassword = [];

const passwordLength = function () {

    const length = window.prompt("How long do you want your password to be?"); 
  
    if (length >= 8  && length <= 128) {

      ifConfirm = window.confirm("Excellent! Would you like Upper Case characters in your password?");       
        if (ifConfirm) {              
          userChoice.push(alphaUpper[Math.floor(Math.random() * alphaUpper.length)]);
          allChars = allChars.concat(alphaUpper);          
        }
      
        ifConfirm = window.confirm("Super! Would you like Lower Case characters in your password?");
        if (ifConfirm) {     
          userChoice.push(alphaLower[Math.floor(Math.random() * alphaLower.length)]);
          allChars = allChars.concat(alphaLower);
        }

        ifConfirm = window.confirm("Awesome! Would you like Numbers in your password?");
        if (ifConfirm) {
          userChoice.push(numbers[Math.floor(Math.random() * numbers.length)]);
          allChars = allChars.concat(numbers);
        }

        ifConfirm = window.confirm("Fantastic! Would you like Symbols in your password?");
        if (ifConfirm) {
          userChoice.push(symbols[Math.floor(Math.random() * symbols.length)]);
          allChars = allChars.concat(symbols);
        }

    }
    
    else {

        window.alert("This isn't a number between 8 and 128! Try Again!");
        passwordLength();
      
      }

  for (let i=0; i < length; i++) {
      
    emptyPassword.push(allChars[Math.floor(Math.random() * allChars.length)]);
      
    }

}

userChoice.concat(emptyPassword);





passwordLength();
console.log(userChoice);
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