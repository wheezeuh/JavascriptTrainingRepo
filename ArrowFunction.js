let msg = () => console.log('Hello World');
let printName = (name) => console.log('My name is ' + name);
let add = (num1, num2) => console.log(num1 + num2);

add(10,20);
msg();
printName('John');

// Multiline arrow function
let getSquareRoot = (num) => { let result = Math.sqrt(num);
    return result;
}

let squareRoot = getSquareRoot(25);
console.log('Square root of 25 is ' + squareRoot);