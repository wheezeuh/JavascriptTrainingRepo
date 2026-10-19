/*print the numbers from 1 to 20
let counter = 1;

while (counter <= 20) {
    console.log(counter);
    counter++; 
}
console.log('END');
*/
//========================
/*
let myNumber = 435176;

while (myNumber > 0) {
    let givenNum = myNumber % 10;

    console.log('given numbers are: '+givenNum);
    myNumber = (myNumber - givenNum) / 10;
}
console.log('END');

/*
//print the table of num using while loop
let counter = 1;
let num=22;
while (counter <= 10) {
    console.log(num +' multiplied by' + counter +'= '+ num*counter);
    counter++; 
}
console.log('END');
*/



/*
//print all the numbers from 1 to 50
let counter = 1;
while (counter <= 50) {
    if (counter % 2){
    console.log(counter);
}
    counter++; 
}
console.log('END');*/

/*
let counter = 1;
while (counter <= 50) {
    console.log(counter);
    counter = counter + 2;
}



//print all the digits in the given number using while loop
let myNumber = 435176;
let numbers = String(myNumber);
let counter = 0;

while (counter < numbers.length) {
    console.log(numbers[counter]);
    counter++;
}
console.log('END');

*/
let myNumber = 435176;

while (myNumber > 0) {
    let rem = myNumber % 10
    console.log(rem);
    myNumber = parseInt(myNumber/10)
}
console.log('END');



