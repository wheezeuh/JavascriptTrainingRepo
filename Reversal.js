//Reverse the give string using the for loop

let str1 = 'let us learn javascript';
let reversedString = '';

for (let i = str1.length - 1; i >= 0; i--) {
    reversedString += str1[i];
}

console.log(reversedString);