
//create a function that will return whether the number is a prime number or not
//functions is only for functions - printing and others should be outside the function
let num = 18;

function checkPrimeNumber(num) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
return isPrime;
}
let result= checkPrimeNumber(num);
console.log(result);