var readlineSync= require('readline-sync')

console.log("Do You Know Me?\n")
console.log("------------------------------------------\n")
console.log("Hi ! This is Suraj Rai, Let's find out how well you know me. All The best. \n");
var userName=readlineSync.question("Please Enter you name my dear friend ! \n");


console.log("\n"+'Welcome ' + userName + " Let's see how well you know \'ME\'\n");

console.log("Here We Go !\n");
console.log("------------------------------------------\n")



var score=0;
var correctAnswer=0;
var usernameAndScore=[
  {
    playerName:"ShubhamPal",
    points:"4"
  }
]

var questionAnswers=[

   {
    question:"What is my nick name?",
    answer: "Churan"
   },

   {
    question:"What is my age?",
    answer: "23"
   },

   {
    question:"Do I like rafting?",
    answer: "Yes"
   },

   {
    question:"What is my favourite street food?",
    answer: "Chilli Potato"
   },

   {
    question:"Which is my favourite chocolate?",
    answer: "Dark Chocolate"
   }

]

for (var i=0;i<questionAnswers.length;i++){

    console.log(questionAnswers[i].question);
    var userAnswer=readlineSync.question("Answer: ");

    if(questionAnswers[i].answer.toUpperCase()===userAnswer.toUpperCase())
    {
         console.log("\n"+"You are right!");
         score++;
         correctAnswer++;
         console.log(" ");
    }

    else{
         console.log("\n"+"You are Wrong");
         score--;
         console.log(" ");
     }
}
console.log("------------------------------------------\n")
console.log("Thank You ! You gave " + correctAnswer + " Out Of " + questionAnswers.length+ " Right Answers "+ ". Your Score is " + score)
console.log(" ")

console.log("The high score is " + usernameAndScore[0].points + " Scored by " + usernameAndScore[0].playerName)
console.log(" ")

console.log("Please send the screenshot if you have beaten the high score !")

 