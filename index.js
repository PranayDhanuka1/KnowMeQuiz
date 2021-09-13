var readlineSync = require("readline-sync");
var chalk = require('chalk');
var userName = readlineSync.question("What is your name? ")
console.log("Welcome " + userName + ", to knowPranay quiz ")
console.log(chalk.bgYellow("Please only use lowercase letters to answer"))
var score = 0;

function play(question, answer){
  var userAnswer = readlineSync.question(question)
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("You are Right!")
    score++
    console.log("Your current score is: " + score)
    console.log("---------------")
  }
  else{
    console.log("You are Wrong!")
  }
}

var qna = [
  {
    question : "What does he likes more: Mountain/Beach?\n ",
    answer : "Mountain"
  },
  {
   question : "What is his favorite passtime: Sleeping/ Reading Books? \n",
    answer : "sleeping" 
  },{
   question : "From where is he doing his B.tech: Pune/Mumbai? \n",
    answer : "pune" 
  },{
   question : "What kind of books does he like most: Fiction/Non-fiction?\n ",
    answer : "Non-fiction" 
  }
]

for ( i = 0; i < qna.length; i++){
  currentQuestion = qna[i]
  play(currentQuestion.question,currentQuestion.answer)
}
var finalScore = console.log("Your final score is " + score);

if(score > 3){
  console.log("You know him preety well ")
}