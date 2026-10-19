let firstName='Luiza'
let lastName = 'Transfiguracion'
let role =  'Management Trainee'

//CONCATINATION
let fullName = firstName + ' '+ lastName;
let fullName2 = firstName.concat(' ', lastName);

console.log(fullName);
console.log(fullName2);

//LENGTH
console.log(fullName.length);
console.log('Length of Full name :'+ fullName.length);

//UPPERCASE
console.log('Uppercase:'+ fullName.toUpperCase());
//LOWERCASE
console.log('Lowercase:'+ fullName.toLowerCase());

//REPLACE METHOD
let replacedStr = fullName.replace('Luiza', 'Katherine');
//console.log('Replaced String: ' + replacedStr);
console.log('Replaced String: ' + fullName.replace('Luiza', 'Katherine'));

let replacedStr2 = fullName.replace('Katherine', 'Luiza');
//console.log('Replaced String: ' + replacedStr2);
console.log('Replaced String: ' + fullName.replace('Katherine', 'Luiza'));
