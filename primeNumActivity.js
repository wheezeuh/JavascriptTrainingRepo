//Find out whether a number is prime number or not

let num = 39;
let prime=0;

for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        prime++;
    }
}

if (prime == 2){
    console.log(num + ' is a prime number');
}
else{
    console.log(num + ' is NOT a prime number');
}
/*
//=====================================
// Find out whether a number is prime or not
let num = 11;

let isPrime = 0;

for(let i = 2; i < num; i++){
    if(num % i == 0){
        isPrime = 1;
        break;
    }
}

if(isPrime == 0){
    console.log(num + ' is a prime number');
}else {
    console.log(num + ' is not a prime number');
}*/