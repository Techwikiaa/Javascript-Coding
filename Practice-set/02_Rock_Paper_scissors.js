choices = ["S", "W", "G"];
userChoice = prompt("Enter a choice of your letter:(S, W, G)").toUpperCase();
airannumber = Math.floor(Math.random() * 3);
aichoice = choices[airannumber];
console.log("ai has choosen:  ", aichoice);
/*
function check(userChoice, aichoice)
  {
  if (userChoice === aichoice) {
    return "tied";
  }
  else if (userChoice === "S" && aichoice === "W") {
    return "User Wins";
  }
  else if (userChoice === "S" && aichoice === "G") {
    return "ai Wins";
  }
  else if (userChoice === "W" && aichoice === "S") {
    return "ai Wins";
  }
  else if (userChoice === "W" && aichoice === "G") {
    return "User Wins";
  }
  else if (userChoice === "G" && aichoice === "W") {
    return "ai Wins";
  }
  else if (userChoice === "G" && aichoice === "S") {
    return "User Wins";
  }
}
console.log("user has choosen:",userChoice ,check(userChoice, aichoice));
*/

// alternative way to use and declare function !!!

const check = (userChoice, aichoice) => {
  if (userChoice === aichoice) {
    return "tied";
  }
  else if (userChoice === "S" && aichoice === "W") {
    return "User Wins";
  }
  else if (userChoice === "S" && aichoice === "G") {
    return "ai Wins";
  }
  else if (userChoice === "W" && aichoice === "S") {
    return "ai Wins";
  }
  else if (userChoice === "W" && aichoice === "G") {
    return "User Wins";
  }
  else if (userChoice === "G" && aichoice === "W") {
    return "ai Wins";
  }
  else if (userChoice === "G" && aichoice === "S") {
    return "User Wins";
  }
}
result = check(userChoice, aichoice);
console.log("user has choosen:",userChoice ,"\n",check(userChoice, aichoice));