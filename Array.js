//INTEGER
let numbers = [10, 11, 22, 13,44,15, 24];
let arrLength = numbers.length;

console.log('Numbers in the Array: ' + numbers);

console.log('Counting numbers in Array: ' + numbers.length);

console.log('Third numbers in Array: ' + numbers[2]);

console.log('Last number in Array: ' + numbers[arrLength-1]);


//STRING
let names=['John','Jane','Jack','Jill'];
let arrNames = names.length;
let searchName = 'Jack';

console.log('Names in the Array: ' + names);

console.log('Counting names in Array: ' + names.length);

console.log('Third name in Array: ' + names[2]);

console.log('Last name in Array: ' + names[arrNames-1]);

console.log('Is ' +searchName + ' here? ' + names.includes(searchName)); 
// Output: true

console.log('what number is: '+ names.indexOf('Jill'));  
// Output: 3

let str1 = 'Clean World Green World Happy World';

let wordsArray = str1.split(' ');
console.log('by WORD Array ' + wordsArray);

let charsArray = str1.split('');
console.log('by LETTER Array ' +charsArray);
// Output: [ 'C', 'l', 'e', 'a', 'n', ' ', 'W', 'o', 'r', 'l', 'd', ... ]