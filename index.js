let passOne = document.getElementById("pass-1")
let passTwo = document.getElementById("pass-2")
let passLength = document.querySelector(".password-length-number")
let numbersInput = document.getElementById("toggle-1")
let symbolsInput = document.getElementById("toggle-2")
let copyImg = document.querySelector(".copy-img")
let tempPasswordOne = ""
let tempPasswordTwo = ""

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z"]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-",
"+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

function compileCharacterArray() {

    if (numbersInput.checked === false && symbolsInput.checked === false) {
        return letters

    } else if (numbersInput.checked === true && symbolsInput.checked === false) {
        return [...letters, ...numbers]
    }

    else if (numbersInput.checked === false && symbolsInput.checked === true) {
        return [...letters, ...symbols]
    }

    else if (numbersInput.checked === true && symbolsInput.checked === true) {
        return [...letters, ...numbers, ...symbols]
    }
}

function resetCharacterArray() {
    characterArray = []
}

function leftArrow() {
    let current = parseInt(passLength.textContent)
    if (current > 6) {
        passLength.textContent -= 1
    }
}

function rightArrow() {
    let current_num = parseInt(passLength.textContent)
    if (current_num < 12) {
        current_num += 1
        passLength.textContent = current_num
    }    
}

function generatePassword() {
    tempPasswordOne = ""
    tempPasswordTwo = ""
    let characterArray = compileCharacterArray()
    let character_count = parseInt(passLength.textContent)
    for (let i=0; i<character_count; i++) {
        let tempCharOne = characterArray[Math.floor( Math.random() * characterArray.length )]
        tempPasswordOne += tempCharOne
    }
    for (let i=0; i<character_count; i++) {
        let tempCharTwo = characterArray[Math.floor( Math.random() * characterArray.length )]
        tempPasswordTwo += tempCharTwo
    }
    passOne.textContent = tempPasswordOne
    passTwo.textContent = tempPasswordTwo
    resetCharacterArray()
}

let copyToClipboardOne = async () => {
    try {
        await navigator.clipboard.writeText(passOne.innerHTML);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
    passOne.textContent = "Copied"
    setTimeout( () => passOne.textContent = tempPasswordOne, 2000)
}

let copyToClipboardTwo = async () => {
    try {
        await navigator.clipboard.writeText(passTwo.innerHTML);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
    passTwo.textContent = "Copied"
    setTimeout( () => passTwo.textContent = tempPasswordTwo, 2000)
}