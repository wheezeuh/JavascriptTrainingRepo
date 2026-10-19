//COMPARE TWO NUMBERS

let num1 = 10;
let num2 = 11;

if (num1 == num2) {
    console.log('Both numbers are equal');
}
else{
    console.log('Both numbers are NOT equal');
}


if (num1 < num2) {
    console.log(`${num1} is less than ${num2}`);
}
else if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
}
else{
    console.log('Both numbers are equal');
}

let age = -18;

if (age >= 18) {
    console.log("CONGRATULATIONS. You are qualified to take the driving license.");
} else if(age < 0){
     console.log("Invalid number.");
}
else {
    console.log("Im sorry. You must be at least 18 years old to apply for a driving license.");
}




