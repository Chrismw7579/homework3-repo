let passwordText = document.querySelector("#password");
let generate = document.querySelector(".generate");
let copy = document.querySelector(".copy");

let length = 0;

let valid = 0;
while (valid == 0) {
    length = prompt("How long do you want your password? (8-128 characters)");
    if (length >=8 && length <= 128) {
        valid = 1;
    } else {
        alert("Please pick a number between 8 and 128 characters.");
    }
}


let special = confirm("Do you want special characters?");
let numeric = confirm("Do you want numeric characters?");
let lower = confirm("Do you want lowercase characters?");
let upper = confirm("Do you want uppercase characters?");
let parameterList = [];
let specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
let alphabeticChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let capitalChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let newPassword = "";


if (special) {
    parameterList.push(specialChars);
}
if (numeric) {
    parameterList.push(numbers);
}
if (lower) {
    parameterList.push(alphabeticChars);
}

if (upper) {
    parameterList.push(capitalChars);
}

function PickCharacter(list) {
    var rand = Math.floor(Math.random() * list.length);
    return list[rand];
}

generate.addEventListener("click", function(event) {
    event.preventDefault();
    newPassword = "";
    for ( var i = 0; i < length; i++) {
        var rand = Math.floor(Math.random() * parameterList.length);
        var list = parameterList[rand];
    
        newPassword += PickCharacter(list);
    }
    passwordText.value = newPassword;
    console.log(passwordText.textContent);
})

copy.addEventListener("click", function(event) {
    event.preventDefault();
    passwordText.select();
    document.execCommand("copy");
})



