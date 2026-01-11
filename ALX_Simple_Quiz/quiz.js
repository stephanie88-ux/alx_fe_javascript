 function checkAnswer(correctAnswer, userAnswer) {
    const correctAnswer = "4";
 }
const selectrRadio = document.querySelector('input[name="quiz"]:checked');
const userAnswer = selectrRadio.value;
    if (userAnswer === correctAnswer) {
     document.getElementById("feedback").innerText = "Correct! Well done.";  
     } else {
        document.getElementById("feedback").innerText = "That's incorrect. Try again!";
     }
     document.getElementById("submit answer").addEventListener("submit-answer",)
     
    