var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("Hey! What's your name?\n");
var welcomeAns = readlineSync.question("Welcome " + userName + " Do you wanna play Naruto Quiz ?  \n (Choose 'a' or 'b') \n \t a. Yes \n \t b. No\n");
if(welcomeAns == "a"){
  console.log("\nCool! Let's take a quiz! \n\t");

  function quiz(que,ans){
  var userAns = readlineSync.question(que + "\n" + "Answer :  ");
  console.log("You entered : " + userAns );

  if(userAns === ans){
    console.log("Correct!");
    score = score  + 2;  
    }
  else {
    console.log("Wrong!");
    score = score - 1;
    };

  console.log("Your score is: "+ score);
  console.log("\n"+"------------"+"\n");
};

//Questions Data in Array and Objects
var queArray = [  
  { q : "Was Naruto a Jinchuriki? \n\t a. No \n\t b. Yes \n\t c. Yes, 2 tails",
    a : "b",
  },

  { q : "Naruto became the ______ Hokage ? \n\t a. 7th \n\t b. 6th \n\t c. 8th",
    a : "a",
  },
  {  q : "Sage of Six Paths or God of Shinobi World had _______ sons ? \n\t a. 6  \n\t b. 1 \n\t c. 2",
    a : "c",
  },
  {  q : "Hinata loved Naruto since? \n\t a. After Chunnin Exam \n\t b. After Pain Arc \n\t c. Childhood",
    a : "c",
  },
  {  q : "Akatsuki had ___ female members  ? \n\t a. 3 \n\t b. 1 \n\t c. 2",
    a : "b",
  },
];

//HighScores Array
var highScores = [
  {
    name : "Aish",
    score : 7,
  },

  {
    name : "Rish",
    score : 10,
  },

];

//Function calls
for(i=0; i<queArray.length; i++){
  var currentque = queArray[i].q;
  var currentans = queArray[i].a;
  quiz(currentque, currentans);
};

console.log("Hey " + userName + " Your Final Score is : " + score);

//High Scores Display and Checks
console.log("\n\t\tExisting High Scores : \n  ")
for(j=0; j<highScores.length; j++){
  console.log("\t\t\t\t" + highScores[j].name + " : " + highScores[j].score);
};

var scoreStatus = "neutral";
for (k=0; k<highScores.length; k++){
    if(score > highScores[k].score){
        k = highScores.length;
        scoreStatus = "beaten";
        console.log("\nCongrats!! " + userName + " You have beaten one of the High Scores");
    }
}  

if(scoreStatus == "neutral"){
for (k=0; k<highScores.length; k++){
    if(score == highScores[k].score){
        k = highScores.length;
        scoreStatus = "matched";
        console.log("\nNot bad! " + userName + " You have matched one of the High Scores.");
    };
};
};

if(scoreStatus == "neutral"){
for (k=0; k<highScores.length; k++){
    if(score < highScores[k].score){
        k = highScores.length;
        console.log("\n Sorry " + userName + " You couldn't beat any of the High Scores this time");
    };
};
};

console.log("\n Note : - If you have beaten the existing HighScores then send me Screenshot, I will update it.");
console.log("\n Thanks for playing!!  Bubye!")



}
else {
  console.log("Okay, Bubye! See you later!");
}