const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')
const includeUppercaseElement = document.getElementById
('includeUppercase')
const includeNumbersElement = document.getElementById
('includeNumbers')
const includeSymbolsElement = document.getElementById
('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')


characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)


function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountRange.value = value 
    characterAmountNumber.value = value
}

function getPassword(){

    var chars = "0123456789abcedfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}[]"
    var passwordLength = 16;
    var password = "";


    for (var i=0; i<passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber,randomNumber+1);

    }
    document.getElementById("password").value = password
}
















