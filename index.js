
const passwordBox = document.getElementById("Password");

const length = "12";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const symbol= "!@#$%^&*()_|-+=?/.>,<{}[]~`";
const number = "0123456789";
const allChars = upperCase + lowerCase + number + symbol;

function createPasswor(){
let password=" ";
password += upperCase[Math.floor(Math.random() * upperCase.length)];
password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
password += number[Math.floor(Math.random() * number.length)];
password += symbol[Math.floor(Math.random() * symbol.length)];
while(length > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)];
}
 passwordBox.value = password;
}
 function copyPass(){
    passwordBox.select();
    document.execCommand("copy");
 }
