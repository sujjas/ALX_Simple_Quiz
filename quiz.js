// quiz.js

// Define the correct answer
const correctAnswer = "4";

// Function to check the answer
function checkAnswer() {
    // Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Retrieve the feedback element
    const feedbackElement = document.getElementById("feedback");

    // Check if an option was selected
    if (!selectedOption) {
        feedbackElement.textContent = "Please select an answer.";
        return;
    }

    // Retrieve the user's selected answer
    const userAnswer = selectedOption.value;

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "Incorrect. The correct answer is 4.";
    }
}

// Add an event listener to the "Submit Answer" button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
