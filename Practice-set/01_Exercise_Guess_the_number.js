// Exercise 1 : Guess the number

let ranNum = Math.floor(Math.random() * 100);  // google function to generate random number;
let inputNum;
let count = 0;
do {
  inputNum = parseInt(prompt("Enter a number's: "));

  if (ranNum < inputNum) {
    count++;
    console.log("Input number is greater than Random number")

  }
  else if (ranNum > inputNum) {
    count++;
    console.log("Input number is smaller than Random number")
  }
  else {
    console.log("Guess is correct");
    score = 100 - count;
    // console.log("score : ", 100 - count);
  }

}
 while (ranNum != inputNum)
console.log("Game Over !")

// console.log(count)
console.log("Your score is ", score);
console.log(" number of guess ",100 - score);
console.log("Actual number is:", ranNum);
