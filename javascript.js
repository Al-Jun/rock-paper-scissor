function add7 (num) {
    return num + 7;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function capitalize (str) {
    let firstChar = str.charAt(0);
    let turnCap = firstChar.toUpperCase();
    let replaceChar = str.replace(firstChar, turnCap);
    console.log(replaceChar);
}

function lastLetter (longString) {
    return longString.charAt(longString.length-1)
}

let str = 'hello sir!';